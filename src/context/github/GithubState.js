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

    //Search Users

    //Get User

    //Get Repos

    //Clear Users

    //Set Loading


    //GithubContext.Provider make the value available for the entire app
    return <GithubContext.Provider
        value ={{
            users : state.users,
            user : state.user,
            repos : state.repos,
            loading: state.loading
        }} >
    {props.children}                        
    </GithubContext.Provider>       //props.children because we want to wrap our entire application with this context
    }

export default GithubState