    import React , {useReducer} from 'react';
    import axios from 'axios';
    import GithubContext from './githubContext';
    import GithubReducer from './githubReducer';

    import {
        SEARCH_USERS,
        SET_LOADING,
        CLEAR_USERS,
        GET_USERS,
        GET_REPOS
    } from '../types';

    const GithubState =  props =>{
        const initialState = {
            users : [],
            user : {},
            repos: [],
            loading : false
        }

    const [state , dispatch] = useReducer(GithubReducer,initialState)

    //Search github Users
    const searchUsers= async (text)=>{
    setLoading();
    let response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_Client_ID}&client_secret=${process.env.REACT_APP_GITHUB_Client_SECRET}`);
    dispatch({
        type: SEARCH_USERS,
        payload : response.data.items
    })
  }

    //Get User
    const getUser = async(username)=>{      
    setLoading();
    let response = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_Client_ID}&client_secret=${process.env.REACT_APP_GITHUB_Client_SECRET}`);
    dispatch({
        type : GET_USERS,
        payload : response.data
    })
    }

    //Get Repos
    const getUserRepos = async(username)=>{
    let response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_Client_ID}&client_secret=${process.env.REACT_APP_GITHUB_Client_SECRET}`);
    dispatch({
        type : GET_REPOS,
        payload : response.data
    })
     }
    

    //Clear Users
    const clearUsers = ()=>dispatch({type : CLEAR_USERS})

    //Set Loading
    const setLoading =()=> dispatch({type: SET_LOADING});


    //GithubContext.Provider make the value available for the entire app
    return <GithubContext.Provider
        value ={{
            users : state.users,
            user : state.user,
            repos : state.repos,
            loading: state.loading,
            searchUsers,
            clearUsers,
            setLoading,
            getUser,
            getUserRepos  
        }} >
    {props.children}                        
    </GithubContext.Provider>       //props.children because we want to wrap our entire application with this context
    }

export default GithubState