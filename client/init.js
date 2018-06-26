import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../imports/ui/App.js';
import {Accounts} from "meteor/accounts-base";

Meteor.startup(() => {

    Meteor.subscribe("Users",function () {
        const count_admin =Roles.getUsersInRole('admin').count()
        console.log(count_admin)
        if(count_admin===0){
            Accounts.createUser(
                {
                    username:"Admin",
                    email:"admin@gmail.com",
                    password:"admin11111111",
                },function (e)
                {
                    if(e)
                    {
                        console.log(e);
                    }
                    else
                    {
                        var user_id=Meteor.userId();
                        Meteor.call('updateRoles',[user_id,['admin']],function (e) {
                            if(e)
                            {
                                console.log(e)
                            }
                        })
                    }
                }
            );
        }
    })

});
