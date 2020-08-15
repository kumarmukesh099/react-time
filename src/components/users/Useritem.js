import React  from 'react'
import ProtoTypes from 'prop-types'

const Useritem = ({user :{avatar_url , login , html_url}})=> {
        return (
            <div className="card text-center">
                <img src={avatar_url} alt="blank" className ="round-img" style={{width : '60px'}}/>
                <h3>{login}</h3>
                <a href={html_url} className="btn btn-primary">More</a>
            </div>
        )
}
Useritem.prototype = {
    user : ProtoTypes.object.isRequired
}

export default Useritem
