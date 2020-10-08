import React, { Fragment , useContext} from 'react'
import Users from '../users/Users';
import Search from '../users/Search';
import homeImage from '../layout/searchimage.png';
import GithubContext from '../../context/github/githubContext';

const Home = () => {
    const githubContext = useContext(GithubContext);
    return (
        <Fragment>
            <Search />  
            <Users />
            {!githubContext.users.length && <img src={homeImage} alt="" />}
        </Fragment>
    )
}

export default Home
