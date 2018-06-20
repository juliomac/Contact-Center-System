import {Meteor} from "meteor/meteor";
import {Setting,test} from "../lib/Database";
Meteor.startup(() => {
    Meteor.publish('chat', function () {
        return test.find()
    });
    Meteor.publish('setting', function () {
        return Setting.find()
    });
});