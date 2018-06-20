import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Accounts } from 'meteor/accounts-base'

class RegistrationForm extends React.Component {
    state= {
        email: "",

    }
    constructor(props) {
        super(props);
    }
    validateEmail(email) {
        if(email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))
        {
        console.log("login successfully");
        return email;
    }
        else
        {

        }


    }
  /*  _accountExist(email)
    {
        Accounts.validateNewUser(function (user) {
            var user_email=user.email[0].address;
            var user_exist=Meteor.users.findOne({'email':user_email});
            if(user_exist)
            {
                console.log('Already exist email');
            }
            
        })
        return email;
    }*/
  handleSubmit=(event)=>
  {

      let valueEmail =this.state.email;
      if(this.validateEmail(valueEmail))
      {
        //  this.addUserDB(valueEmail);
          const {onLogin} = this.props
          onLogin(this.state.email);
      }

  }
    render(){

        return (

            <div className="container">
                    <div className="col-50">
                        <h3>Welcome to our Live Chat</h3>
                        <label for="email">Email</label>
                        <input type="text" id="email" name="email" onChange={(e)=>
                            this.setState({email:e.target.value})}	placeholder="someone@example.com"/>
                        <label>Click on Start Chat to start chatting</label>
                    </div>
                <input type="submit" value="Start Chat" className="btn" onClick={()=>this.handleSubmit()}/>
            </div>
        )
    }
}
export default RegistrationForm