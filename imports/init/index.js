import {Accounts} from "meteor/accounts-base";

export const initIndex =()=>{
    let index =localStorage.getItem("initIndex")
    if(index)
        return parseInt(index)
    else
        return 1

}

export const createAccount=(email,password,profile)=>{

    Accounts.createUser(
        {
            username:email.split('@')[0],
            email:email,
            password:password,
            profile: profile
        },function (e)
        {
            if(e)
            {
                console.log(e);
            }
            else
            {
                var user_id=Meteor.userId();
                Meteor.call('updateRoles',[user_id,['user']],function (e) {
                    if(e)
                    {
                        console.log(e)
                    }
                    else {
                        Meteor.call('createRoomChat',profile.chatRoomId,user_id)
                    }
                })
            }
        }
    );
}
export const getChatRoomId=(user_id)=>
{
    const user = Meteor.users.findOne({_id:user_id});
    if(user){
        const chatRoomId = user.profile.chatRoomId;
        return chatRoomId
    }

};

export const handleLogin =(email,password,returnStatus)=>{

    return Meteor.loginWithAdminPassword(email, password, function (error) {
        if(!error) {
            // Success

            console.log("login successfully")
            returnStatus(true)
        } else {
            console.log(error)
            returnStatus(false)
        }
    });
}
