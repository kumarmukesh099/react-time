import React  from 'react'
import ProtoTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Useritem = ({user :{avatar_url , login , html_url}})=> {
        return (
            <div className="card text-center">
                <img src={avatar_url} alt="blank" className ="round-img" style={{width : '60px'}}/>
                <h3>{login}</h3>
                <Link to={`user/${login}`} className="btn btn-primary">More</Link>
            </div>
        )
}
Useritem.prototype = {
    user : ProtoTypes.object.isRequired
}

export default Useritem
