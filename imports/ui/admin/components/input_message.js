import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import 'react-chat-elements/dist/main.css';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/Input';
import Send from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import {Meteor} from 'meteor/meteor'
const styles = theme => ({
    root1: {
        backgroundColor: theme.palette.background.paper,
        paddingTop: 0,
        paddingBottom: 0,
        border:'1px solid #ccc',
        padding:20,
        marginBottom:0,
        marginTop:10,
        marginRight:'2%',
        marginLeft:'0.2%',
        borderRadius:10,
        position:'fixed',
        bottom:1,
        width:'67%',
    },
    input:{
        width:'100%',
        paddingBottom:20,
        paddingTop:20,
    }
});


class InputMessage extends React.Component {
    state = {
        multiline: 'Controlled',
        message:""
    };

    handleChange = name => event => {
        this.setState({
            message: event.target.value,
        });
    };
    submitReply(){
        const {chat_room_id} = this.props
        let message_reply ={
            author:"them",
            type:"text",

            data:{
                text:this.state.message,

            },
            sender_id:"bot",
            createdAt:new Date()
        }

        Meteor.call('replyMessage',message_reply,chat_room_id)
        this.setState({message:""})
    }


    render() {
        const {classes} = this.props;
        const {message} = this.state
        return <div className={classes.root1}>
            <form>
            <TextField
                id="multiline-flexible"
                disableUnderline={true}
                multiline
                rows="2"
                placeholder="Type your message..."
                value={message}
                className={classes.input}
                onChange={this.handleChange('multiline')}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton onClick={()=>this.submitReply()} className={classes.button} aria-label="Delete">
                            <Send />
                        </IconButton>
                    </InputAdornment>
                }
            />
            </form>
        </div>;
    }
}

InputMessage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputMessage);