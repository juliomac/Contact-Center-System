import {
    SWITCH_COMPONENT,
    LOGIN_STATUS,
    USERNAME,
    EMAIL,
    PASSWORD,
    PHONE} from "../constans/action_type";


export const switchComponent = index =>({type:SWITCH_COMPONENT,payload:index})
export const loginStatus = status =>({type:LOGIN_STATUS,payload:status})
export const usernameAdmin = username =>({type:USERNAME,payload:username})
export const passwordAdmin = password =>({type:PASSWORD,payload:password})
export const emailAdmin = email =>({type:EMAIL,payload:email})
export const phoneAdmin = phone =>({type:PHONE,payload:phone})
