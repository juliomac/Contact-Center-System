import {Meteor} from "meteor/meteor";
import {Setting} from "../lib/Database";
import {agentDialogFlow} from "../imports/api/dialogflow";

Meteor.startup(() => {
   /* agentDialogFlow("hello").then(res=>{
        console.log("response"+res)
    })*/
    const count_setting = Setting.find().count()
    if(!count_setting){
        Setting.insert({percentage_reply:80,auto_reply:true,createdAt:new Date(),updatedAt:new Date()})
    }

})
