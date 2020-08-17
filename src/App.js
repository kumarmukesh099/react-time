import React , {Component, Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router ,  Switch,Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users';
import axios from 'axios'
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import { About } from './components/pages/About';

class App extends  Component{

 state ={
   users: [],
   loading:false,
   alert : null
 }
async componentDidMount(){
//   this.setState({loading:true})
//  let response = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_Client_ID}&client_secret=${process.env.REACT_APP_GITHUB_Client_SECRET}`);
//  this.setState({users:response.data , loading:false})
}

//search github users
searchUsers= async(text)=>{
  this.setState({loading:true})
  let response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_Client_ID}&client_secret=${process.env.REACT_APP_GITHUB_Client_SECRET}`);
  this.setState({users:response.data.items , loading:false})
  console.log(this.state.users.length)
}

//clear Search Users
clearUsers = ()=>{
  this.setState({users:[] , loading:false})
  console.log("userssss",this.state.users.length)
}

//show alert if search is empty
setAlert=(msg,type)=>{
  this.setState({alert :{msg : msg,type:type}})

setTimeout(()=>{
  this.setState({alert:null})
},1000)
}

  render(){
     return(
       <Router>
      <div className="App">
        <Navbar />
         <div className="container">
        <Alert alert={this.state.alert} />
        <Switch>
          <Route exact path='/' render ={(props)=>
            <Fragment>
              <Search searchUsers={this.searchUsers} 
              clearUsers={this.clearUsers} 
              showClear={this.state.users.length > 0 ? true : false}
               setAlert = {this.setAlert}
               />
              <Users loading={this.state.loading} users={this.state.users}/>
              </Fragment>
     }
            />
          <Route exact path="/about" component={About}/>
        </Switch>
        </div> 
      </div>
      </Router>
    );
  } 
}

  

export default App;



