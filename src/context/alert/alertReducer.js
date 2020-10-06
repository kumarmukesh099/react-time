import {
  SET_ALERT,
  REMOVE_ALERT
} from '../types';


//reducaer take tow arguments state and action
export default (state,action)=>{
    switch(action.type){
        case SET_ALERT :
            return action.payload
        case REMOVE_ALERT : 
            return null
        default: 
        return state;
    }

}