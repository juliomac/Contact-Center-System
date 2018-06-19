import {SWITCH_COMPONENT} from "../constans/action_type";
import {initIndex} from "../init";


const initialState = {
    switch_component:initIndex()
}

export default rootReducer = (state=initialState,action)=>{

    switch (action.type){
        case SWITCH_COMPONENT:
            return {...state,switch_component:action.payload}

        default:
            return state
    }

}