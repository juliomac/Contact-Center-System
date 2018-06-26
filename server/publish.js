import {Meteor} from "meteor/meteor";
import {Setting,test} from "../lib/Database";
import {ChatRoom} from "../lib/Database";

Meteor.startup(() => {
    Meteor.publish('chat', function () {
        return test.find()
    });
    Meteor.publish('setting', function () {
        return Setting.find()
    });

    Meteor.publish("userStatus", function() {
        return Meteor.users.find({ "status.online": true });
    });
    Meteor.publish("ChatRooms",function () {
        return ChatRoom.find();

    });
    Meteor.publish("Users",function () {
        return Meteor.users.find();

    })
});