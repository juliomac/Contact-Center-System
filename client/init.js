import React from 'react';
import { Meteor } from 'meteor/meteor';
import {HTTP} from "meteor/http";
import axios from 'axios';


Meteor.startup(() => {


    axios.get('https://localhost:4000')
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error);
        });





    Meteor.subscribe('Users',function () {
        const count_admin =Roles.getUsersInRole('admin').count()
        let admin_data = {username:"admin",email:"admin@gmail.com",password:"11111111",profile:{phone_number:"000000"}}
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
