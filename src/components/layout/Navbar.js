import React  from 'react'
//defaultProps is predefined if we are not going to pass the props then it will take from defaultProps
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Navbar =(props)=> (
        <nav className="navbar bg-primary">
            {props.title}
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
        </nav>
    )
Navbar.defaultProps = {
    title : "Github Finder"
  }
Navbar.propTypes = {
    title : PropTypes.string.isRequired
}
export default Navbar
