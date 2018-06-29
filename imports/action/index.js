import {SWITCH_COMPONENT,LOGIN_STATUS} from "../constans/action_type";


export const switchComponent = index =>({type:SWITCH_COMPONENT,payload:index})
export const loginStatus = status =>({type:LOGIN_STATUS,payload:status})
