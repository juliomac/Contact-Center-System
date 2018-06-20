import {Meteor} from "meteor/meteor";
import {Setting} from "../lib/Database";


Meteor.methods({
    'updatePercentage'(id,percentage) {
        Setting.update({_id:id},{$set:{percentage_reply:percentage}})
        return true
    }
});