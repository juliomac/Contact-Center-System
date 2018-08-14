import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { Scrollbars } from 'react-custom-scrollbars';
import InputMessage from '../components/input_message';
import MessagesList from '../components/messages_list';
import ListUser from '../components/livechat_users_list';
import {ChatRoom} from "../../../../lib/Database";
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
const drawerWidth = 240;
Meteor.subscribe('ChatRooms')
const styles = theme => ({
    root: {
        flexGrow: 1,
        height: '90%',
        zIndex: 1,
        overflow: 'unset',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowY: 'unset!important',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: '98%',
        [theme.breakpoints.up('sm')]: {
            width: '96%',
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: 0,
    },

});

class LiveChat extends React.Component {
    state = {
        open: false,
        list_user:'',
        message_list:[],
        chat_room_id:""
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };


    onUserChange(e){
        this.setState({chat_room_id:e.chat_room_id})
        Tracker.autorun(()=>{
            const message =ChatRoom.findOne({_id:e.chat_room_id})
            this.formatMessage(message.message_user)
        })


        //this.setState({message_list:message_list});
    }
    formatMessage(message_list){
        let data=[]
        //console.log(message_list)
        message_list.forEach((item,index)=>{
            data[index] = {
                position:item.author === "me"?"left":"right",
                type:item.type,
                text:item.data.text,
                date: new Date()
            }
        })
       this.setState({message_list:data})
    }


    render() {
        const { classes, theme } = this.props;
        const {message_list,chat_room_id} = this.state
        return (
            <div className={classes.root} style={{overflow:'unset'}}>
                <Scrollbars style={{ width: '30%'}}>
                    <Drawer
                        variant="permanent"
                        classes={{
                            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                        }}
                        open={this.state.open}
                    >
                        <ListUser onUserChange={(e)=>this.onUserChange(e)}/>
                        <Divider />
                    </Drawer>
                </Scrollbars>

                <Scrollbars>
                    <main className={classes.content}>
                        <div>
                            <MessagesList message_list={message_list}/>
                            <InputMessage chat_room_id={chat_room_id}/>
                        </div>
                    </main>
                </Scrollbars>

            </div>
        );
    }
}

LiveChat.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(LiveChat);