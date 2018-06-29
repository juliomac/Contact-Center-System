import {SWITCH_COMPONENT,LOGIN_STATUS} from "../constans/action_type";
import {initIndex} from "../init";


const initialState = {
    switch_component:initIndex(),
    login_status:""
}

export default rootReducer = (state=initialState,action)=>{

    switch (action.type){
        case SWITCH_COMPONENT:
            return {...state,switch_component:action.payload}
        case LOGIN_STATUS:
            return {...state,login_status:action.payload}

        default:
            return state
    }

}
