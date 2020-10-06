import React , {useContext} from 'react'
import AlertContext from '../../context/alert/alertContext';


const Alert = ()=> {
    const alertContext = useContext(AlertContext) //initialise it
    const {alert} = alertContext;
    return (
      alert!=null && (<div className={`alert alert-${alert}`}>
             {alert.msg}
        </div>)  
    )
}

export default Alert
