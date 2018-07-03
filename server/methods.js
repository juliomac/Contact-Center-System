import {Meteor} from "meteor/meteor";
import {ChatRoom, Setting} from "../lib/Database";
import {getChatRoomId} from "../imports/init";
import {default_message} from "../imports/data/message";
import {Accounts} from "meteor/accounts-base";

Meteor.methods({
    'check_existed'(email) {
        const user = Accounts.findUserByEmail(email)
        return user ? true:false
    },
    'create_chat_room'(email){
        Meteor.loginWithPassword(email,email)
    }

});
Meteor.methods({
    updateRoles:(data)=>
    {
        Roles.addUsersToRoles(data[0],data[1]);
    }
});

Meteor.methods({
    'createRoomChat'(chatRoomId,user_id) {

        ChatRoom.insert({_id:chatRoomId,user_id,message_user:default_message});
    }
});

Meteor.methods({
    'replyMessage'(message,chat_room_id) {
        ChatRoom.update({_id:chat_room_id},
            {$addToSet:{message_user:message}});
    }
});

Meteor.methods({
    'insertMessage'(room_id,message) {
        ChatRoom.update({_id:room_id},
            {$addToSet:{message_user:message}});
    }
});


Meteor.methods({
    'updatePercentage'(id,percentage) {
        Setting.update({_id:id},{$set:{percentage_reply:percentage}})
        return true
    }
});
Meteor.methods({
    'updateBotReplyStatus'(id,auto_reply) {
        console.log("Auto: "+auto_reply)
        Setting.update({_id:id},{$set:{auto_reply:auto_reply}})
        return true
    }
});

Meteor.methods({
    'createAdmin'(admin_data) {
        const user_id =Accounts.createUser(admin_data);
        return user_id
    }

});

/*---------------------------- update user ---------------------*/

Meteor.methods({
    'updateEmail'(email) {
        console.log(Meteor.userId())
        Meteor.users.update({
                _id: Meteor.userId()
            },
            {
                $set: {
                    'emails.0.address': email,
                }
            });
    }
});
Meteor.methods({
    'updateUsername'(username) {
        Meteor.users.update({
                _id: Meteor.userId()
            },
            {
                $set: {
                    'username': username,
                }
            });
    }
});

Meteor.methods({
    'updatePhoneNumber'(phone_number) {
        Meteor.users.update({
                _id: Meteor.userId()
            },
            {
                $set: {
                    'profile.phone_number': phone_number,
                }
            });
    }
});


