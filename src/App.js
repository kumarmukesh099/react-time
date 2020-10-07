//import React , {useState , Fragment} from 'react';
import React  from 'react';
import './App.css';
import {BrowserRouter as Router ,  Switch,Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import User from './components/users/User';
import Alert from './components/layout/Alert';
import { About } from './components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/alertState';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';


const App =()=>{

//const [users,setUsers] = useState([]);    moving it to githubState
//const [user,setUser] = useState({});
//const [repos,setRepos] = useState([]);
//const [loading,setLoading] = useState(false);
//const [alert,setAlert] = useState(null);
//we used to initialise the value by using useState from React


//async componentDidMount(){    //for class based 
//   this.setState({loading:true})
//  let response = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_Client_ID}&client_secret=${process.env.REACT_APP_GITHUB_Client_SECRET}`);
//  this.setState({users:response.data , loading:false})
//}



//Get a single Github User
// const getUser = async(username)=>{        //moved it to githubstate
//   setLoading(true)
//   let response = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_Client_ID}&client_secret=${process.env.REACT_APP_GITHUB_Client_SECRET}`);
//   setUser(response.data);
//   setLoading(false);
// }
////and use setnameofthingusedabove() to set the value

// //Get a single Github User Repos       //moed it to GithubState
// const getUserRepos = async(username)=>{
//     let response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_Client_ID}&client_secret=${process.env.REACT_APP_GITHUB_Client_SECRET}`);
//     setRepos(response.data);
//   }


// //show alert if search is empty
// const showAlert=(msg,type)=>{
//   setAlert({msg : msg,type:type})

// setTimeout(()=>{
//   setAlert(null)
// },1000)
// }

     return(
       <GithubState>
         <AlertState>
       <Router>
      <div className="App">
        <Navbar />
         <div className="container">
        <Alert />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/user/:login" component={User} />
          <Route component={NotFound}/>
        </Switch>
        </div> 
      </div>
      </Router>
      </AlertState>
      </GithubState>
    );
  
}

  

export default App;



