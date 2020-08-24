import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USERS,
    GET_REPOS
} from '../types';


//reducaer take tow arguments state and action
export default (state,action)=>{
    switch(action.type){
        case SEARCH_USERS :
            return{
                ...state,
                users:action.payload,
                loading:false
            }
        case SET_LOADING:
            return{
                ...state,                       //give current state
                loading : true              
            }
        default: 
        return state;
    }

}