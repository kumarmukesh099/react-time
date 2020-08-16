import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {
    state ={
        text : ""
    }
    static propTypes = {
        searchUsers : PropTypes.func.isRequired,
        clearUsers : PropTypes.func.isRequired,
        showClear : PropTypes.bool.isRequired,
        setAlert : PropTypes.func.isRequired
    }

    onChange =  (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){                 //if we use regular method then we need to bind the function to use this
       e.preventDefault();
       if(this.state.text===""){
           this.props.setAlert('Please enter something','light');
       }
       else{
        console.log(this.state.text)
        this.props.searchUsers(this.state.text)
       }
    }



    render() {
        const {text,showClear,clearUsers} = this.props
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" name="text" placeholder="Search User"
                    value={text}
                    onChange={this.onChange}
                    />
                    <button type="submit" className="btn btn-dark btn-block">Search</button>
                </form>
                {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
            </div>
        )
    }
}

export default Search
