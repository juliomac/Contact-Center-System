import {Meteor} from "meteor/meteor";
import {Setting} from "../lib/Database";

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
    'updatePercentage'(id,percentage) {
        Setting.update({_id:id},{$set:{percentage_reply:percentage}})
        return true
    }
});