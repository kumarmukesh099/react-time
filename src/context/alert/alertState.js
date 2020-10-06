import React , {useReducer} from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';

import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types';

const AlertState =  props =>{
    const initialState = null;

const [state , dispatch] = useReducer(AlertReducer,initialState)


//show alert if search is empty
const showAlert=(msg,type)=>{
  dispatch({
      type : SET_ALERT,
      payload : {msg , type}  
  })
  setTimeout(()=>dispatch({type : REMOVE_ALERT}),1000) }

//AlertContext.Provider make the value available for the entire app
return <AlertContext.Provider
    value ={{
      alert : state,
      showAlert
    }} >
{props.children}                        
</AlertContext.Provider>       //props.children because we want to wrap our entire application with this context
}

export default AlertState