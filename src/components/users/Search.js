import React ,{useState , useContext}  from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = ({setAlert})=> {
  const githubContext = useContext(GithubContext);
  console.log("search===============>",githubContext )
  const [text,setText] = useState('');  

  const onChange =  (e)=>{
        setText(e.target.value)
    }
  const onSubmit=(e)=>{                 
       e.preventDefault();
       if(text===""){
        setAlert('Please enter something','light');
       }
       else{
        githubContext.searchUsers(text)
       }
    }

    return (
            <div>
                <form className="form" onSubmit={onSubmit}>
                    <input type="text" name={text} placeholder="Search User"
                    value={text}
                    onChange={onChange}
                    />
                    <button type="submit" className="btn btn-dark btn-block">Search</button>
                </form>
                {githubContext.users && githubContext.users.length>0 && <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>}
            </div>
        )
}

Search.propTypes = {
    setAlert : PropTypes.func.isRequired
}

export default Search
