import {SWITCH_COMPONENT,LOGIN_STATUS,USERNAME,PHONE,PASSWORD,EMAIL} from "../constans/action_type";
import {initIndex} from "../init";


const initialState = {
    switch_component:initIndex(),
    login_status:"",
    email:"",
    password:"",
    username:"",
    phone_number:""
}

export default rootReducer = (state=initialState,action)=>{

    switch (action.type){
        case SWITCH_COMPONENT:
            return {...state,switch_component:action.payload}
        case LOGIN_STATUS:
            return {...state,login_status:action.payload}
        case EMAIL:
            return {...state,email:action.payload}
        case USERNAME:
            return {...state,username:action.payload}
        case PASSWORD:
            return {...state,password:action.payload}
        case PHONE:
            return {...state,phone_number:action.payload}
        default:
            return state
    }

}
