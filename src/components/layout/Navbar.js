import React  from 'react'
//defaultProps is predefined if we are not going to pass the props then it will take from defaultProps
import PropTypes from 'prop-types'

const Navbar =(props)=> (
        <nav className="navbar bg-primary">
            {props.title}
        </nav>
    )
Navbar.defaultProps = {
    title : "Github Finder"
  }
Navbar.propTypes = {
    title : PropTypes.string.isRequired
}
export default Navbar
