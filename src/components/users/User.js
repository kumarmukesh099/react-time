import React, { Fragment, useEffect} from 'react'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import Repos from '../repos/Repos'
import {Link} from 'react-router-dom'

const User = ({user,loading,repos,getUser,getUserRepos,match})=>{

    useEffect(()=>{
        getUser(match.params.login)
        getUserRepos(match.params.login)        
        // eslint-disable-next-line                
    },[]) //we add eslint-disable-next-line in upper line and that is working now and if not then we add dependecny here here dependency otherwise it will show dependency error 
        const {
            name,
            avatar_url,
            location,
            bio,
            company,
            // blog,
            login,
            html_url,
            website,
            followers,
            following,
            public_repos,
            public_gists,
             hireable
        } = user

        if(loading) return <Spinner />
        else {

        }
        return <Fragment>
            <Link to="/" className="btn btn-light" style={{position: "absolute",left: "45%" , border:"1px solid green"}}>Back To Search</Link>
            Hireable : {hireable ? <b>Yes</b> : <b>No</b> }
            <div className="card">
            <div className="all-center">
            <img  src={avatar_url}
            className="round-img"
            alt=""
            style={{width:"150px"}}
            />
            <h1>{name}</h1>
            <p>Location : {location}</p>
            {bio && <Fragment>Bio : {bio} </Fragment>}
            <a href={html_url} className="btn btn-dark">Visit Github Profile</a>
            <ul>
                <li>
                {login && <Fragment>
                <strong>Username :</strong> {login}
                </Fragment>}
                </li>
                <li>
                {company && <Fragment>
                <strong>Company :</strong> {company}
                </Fragment>}
                </li>
                <li>
                {website && <Fragment>
                <strong>Website :</strong> {website}
                </Fragment>}
                </li>
            </ul>
            </div>

            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Followers : {followers} </div>
                <div className="badge badge-primary">Following : {following} </div>
                <div className="badge badge-primary">Public_respos : {public_repos} </div>
                <div className="badge badge-primary">Public_gists : {public_gists} </div>

            </div>
            <Repos repos={repos}/>
        </Fragment>
                
    
}

User.propTypes = {
    loading : PropTypes.bool,
    user : PropTypes.object.isRequired,
    getUser : PropTypes.func.isRequired,
    repos : PropTypes.array.isRequired,
    getUserRepos : PropTypes.func.isRequired
}

export default User
