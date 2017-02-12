import React from 'react'
import { ReactDOM } from 'react'
import DOM from 'react-dom'
import { Link } from 'react-router'

class NavLink extends React.Component{
    
    render() {

        return (
            <Link to={this.props.path} activeClassName="active"> {this.props.name} </ Link> 
        )
    }  
}

export default NavLink