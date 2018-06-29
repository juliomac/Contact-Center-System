import React from 'react';
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    Meteor.subscribe('Users',function () {
        const count_admin =Roles.getUsersInRole('admin').count()
        let admin_data = {username:"admin",email:"admin@gmail.com",password:"11111111"}
        if(count_admin === 0){
            Meteor.call('createAdmin',admin_data,function (error,res) {
                if( error ){
                    console.error("ERROR -> ", error )
                }else{
                    Meteor.call('updateRoles',[res,['admin']])
                }
            })
        }
    })

});
