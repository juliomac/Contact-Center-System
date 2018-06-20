import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MessageList from './MessageList'
import UserInput from './UserInput'
import Header from './Header'
import  RegistrationForm from './loginForm'
import {Tracker} from 'meteor/tracker'
import {Accounts} from "meteor/accounts-base";
import {Random} from 'meteor/random'
//import {ChatRoom} from "../../../../lib/Database";

let Users = Meteor.subscribe('Users');

Meteor.subscribe('userStatus');
let message_user =Meteor.subscribe("user_message");





class ChatWindow extends Component {
    constructor(props) {
        super(props);
        this.state={
            email:"",
            user_id:"",
            isLogin:false,
            message_list:[
                {type: 'text', author: "them", data: { text: "Welcome to vKirirom Chat! How may i help you?"} },

            ]
        }
    }

    retrieveMessage(){
        Tracker.autorun(()=>{
            const chat_room = ChatRoom.findOne({user_id:Meteor.userId()})
            if(chat_room) {
                const {message_user} = chat_room
                if (message_user.length)
                    this.setState({message_list: message_user})
            }

        })
    }

    onUserInputSubmit(message) {
        this.props.onUserInputSubmit(message);
        let user_id=Meteor.userId();
        message["sender_id"] = user_id
        message["createdAt"] = new Date()
        ChatRoom.update({_id:getChatRoomId(user_id)},
           {$addToSet:{message_user:message}});


    }

    _userHandle(event)
    {
       var user_email=event;
       this._addUserDB(user_email);
    }
    _addUserDB(event)
    {
        let userName ="client "+ Meteor.users.find().count();
        let email=event;
        let password=event;
        let chatRoomId =Random.id();
        let profile={
            chatRoomId
        }
        Meteor.call('check_existed',email,function (error,result) {
                console.log(result);


                if(result){
                    Meteor.loginWithPassword(email,email,function (error) {
                        if(error){
                            console.log("login error")
                        }
                        else {
                          //  this.setState({message_list:ChatRooms.find({user_id:Meteor.userId()}).fetch()})
                        }
                    })
                }else{
                    Accounts.createUser(
                        {
                            userName:userName,
                            email:email,
                            password:password,
                            profile: profile
                        },function (e)
                            {
                             if(e)
                             {
                                 console.log(e);
                             }
                             else
                             {
                               var user_id=Meteor.userId();
                               Meteor.call('updateRoles',[user_id,['user']],function (e) {
                                    if(e)
                                    {
                                        console.log(e)
                                    }
                                    else {
                                        CreateChatRooms(chatRoomId,user_id);
                                    }
                               })
                             }
                            }

                    );
                }
            }

        )


    }
    componentWillMount()
    {
        Meteor.userId()?this.setState({isLogin:true}):this.setState({isLogin:false});
        Meteor.subscribe('ChatRooms',function () {
            this.retrieveMessage()
        }.bind(this))


    }
    render() {
        const {isLogin} = this.state;
        let classList = [
            "sc-chat-window",
            (this.props.isOpen ? "opened" : "closed")
        ];
       console.log(this.state.message_list)
        return (

            <div className={classList.join(' ')}>
                <Header
                    teamName={this.props.agentProfile.teamName}
                    imageUrl={this.props.agentProfile.imageUrl}
                    onClose={this.props.onClose}
                />
                {
                    isLogin?
                        <div className="sc-chat-window">
                            <Header
                                teamName={this.props.agentProfile.teamName}
                                imageUrl={this.props.agentProfile.imageUrl}
                                onClose={this.props.onClose}
                            />
                            <MessageList
                                messages={this.state.message_list}
                                imageUrl={this.props.agentProfile.imageUrl}

                            />
                            <UserInput onSubmit={this.onUserInputSubmit.bind(this)}/>
                        </div>
                        :
                            <RegistrationForm onLogin={(status)=> {
                                if(status){
                                    this.retrieveMessage()
                                }
                                this.setState({isLogin: status});
                                this._userHandle(status);
                            }}/>

                }
            </div>

        );

    }
}

export default ChatWindow;
export const CreateChatRooms =(chatRoomId,user_id)=>
{
    ChatRoom.insert({_id:chatRoomId,user_id,message_user:[]});
};
export const getChatRoomId=(user_id)=>
{
    const user = Meteor.users.findOne({_id:user_id});
    const chatRoomId = user.profile.chatRoomId;
    return chatRoomId
};
