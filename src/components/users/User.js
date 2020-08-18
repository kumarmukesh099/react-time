import React, { Component } from 'react'

class User extends Component {
componentDidMount(){
    this.props.getUser(this.props.match.params.login)
    console.log(this.props)

}
    render() {
        const {
            name,
            // avatar_url,
            // location,
            // bio,
            // blog,
             login,
            // html_url,
            // followers,
            // following,
            // public_respos,
            // public_gists,
            // hierable
        } = this.props.user
        //const {loading} = this.props;
        return (
            <div>
                {name}
                    {login}
            </div>
        )
    }
}

export default User
