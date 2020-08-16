import React from 'react'

const Alert = ({alert})=> {
    return (
      alert!=null && (<div className={`alert alert-${alert}`}>
             {alert.msg}
        </div>)  
    )
}

export default Alert
