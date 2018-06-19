import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import 'react-chat-elements/dist/main.css';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/Input';
import Send from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
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
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };


    render() {
        const {classes} = this.props;
        return <div className={classes.root1}>
            <TextField
                id="multiline-flexible"
                disableUnderline={true}
                multiline
                rows="2"
                placeholder="Type your message..."
                className={classes.input}
                onChange={this.handleChange('multiline')}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton className={classes.button} aria-label="Delete">
                            <Send />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </div>;
    }
}

InputMessage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputMessage);