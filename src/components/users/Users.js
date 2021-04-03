import React , {useContext} from 'react';
import Useritem from './Useritem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = ()=>{
    const githubContext = useContext(GithubContext);
    const {users,loading}= githubContext;
if(loading){
        return <Spinner />
}
else if(users && users.length) {
    return(  
        <div style={userStyle}>
            {users.map(user =>{
                return <Useritem key={user.id} user={user}/> 
            })}
        </div>
    )
}
else{
   return <div></div>
}
}

const userStyle= {
display : 'grid',
gridTemplateColumns : 'repeat(3,1fr)',
gridGap : '1rem'
}


export default Users
