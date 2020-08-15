import React , {Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users';
import axios from 'axios'
import Search from './components/users/Search';

class App extends  Component{

 state ={
   users: [],
   loading:false
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

  render(){
     return(
      <div className="App">
        <Navbar />
        <div className="container">
        <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} 
        showClear={this.state.users.length > 0 ? true : false}/>
        <Users loading={this.state.loading} users={this.state.users}/>
        </div> 
      </div>
    );
  } 
}

  

export default App;
