import {Meteor} from "meteor/meteor";
import {ChatRoom, Setting} from "../lib/Database";
import {getChatRoomId} from "../imports/init";
import {default_message} from "../imports/data/message";

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
<<<<<<< HEAD
    }
});
Meteor.methods({
    'updateBotReplyStatus'(id,auto_reply) {
        console.log("Auto: "+auto_reply)
        Setting.update({_id:id},{$set:{auto_reply:auto_reply}})
        return true
    }
=======
    },

>>>>>>> a9c59c391818ef6fa5c1d1a3ba11567e8f01a175
});