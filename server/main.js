import { Meteor } from 'meteor/meteor';
import {test} from "../lib/Database";
import {Setting} from "../lib/Database";

Meteor.startup(() => {
  // code to run on server at startup
    // Server: Publish the `Rooms` collection, minus secret info...
    Meteor.publish('chat', function () {
        return test.find()
    });
    Meteor.publish('setting', function () {
        return Setting.find()
    });
});






