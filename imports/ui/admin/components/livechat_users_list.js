import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import 'react-chat-elements/dist/main.css';
import { ChatList } from 'react-chat-elements'
import './css/livechat_users_list.css';
import {data} from "../../../data";
import {Meteor} from 'meteor/meteor'
import {Tracker} from 'meteor/tracker'
const styles = theme => ({
    root1: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        paddingTop: 0,
        paddingBottom: 0,
    },
    colorPrimary1:{
        backgroundColor:'#d8e9ef !important',
    },
    navDrawer1:{
        paddingTop: 0,
        paddingBottom: 10,
    },
    icon_text1:{
        color:'#fff'
    },
    badge: {
        background: '#75D701',
        top:-34,
        right:0,
        width:10,
        height:10
    },
});


class ListUser extends React.Component {
    state ={
        data,
        user_list:[]
    }
    getInfoUserOnline(){
        Tracker.autorun(()=>{
            const user_list =  Meteor.users.find({ "status.online": true },
                {fields:{_id:1,"emails":1,username:1,"profile.chatRoomId":1}}).fetch()
            console.log(user_list)
            this.formatField(user_list)
        })
    }
    formatField(userList){
        let data = []
        userList.map((item,index)=>{
            data[index]={
                id:item._id,
                chat_room_id:item.profile.chatRoomId,
                title:item.username,
                className:'',
                unread:0,
                avatar: 'https://ui-avatars.com/api/?name='+item.username[0]+'&background=4e8cff&color=fff',
                alt: 'Reactjs',
            }
        })
        console.log(data)
        this.setState({user_list:data})
    }
    componentWillMount(){
        Meteor.subscribe('userStatus',function () {
            this.getInfoUserOnline()
        }.bind(this))
    }

    itemList(e){
        const {user_list} = this.state
        let temp=user_list
        var be_break=0;
        for (var i = 0; i < temp.length; i++) {
            if (temp[i].id === e.id) {
                temp[i].className = "selected";
                be_break++;
            }
            else{
                if(temp[i].className=="selected"){
                    temp[i].className="";
                    be_break++;
                }
            }
            if(be_break==2){
                break;
            }
        }
        this.setState({user_list:temp})
    }
    render() {
        const {classes,onUserChange} = this.props;
        const {user_list} = this.state
        return <div className={classes.root1}>

            <ChatList
                onClick={(e)=>{this.itemList(e);onUserChange(e)}}
                className='chat-list'
                dataSource={user_list} />
        </div>;
    }
}

ListUser.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListUser);