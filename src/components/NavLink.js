import React from 'react'
import { ReactDOM } from 'react'
import DOM from 'react-dom'
import { Link } from 'react-router'

class NavLink extends React.Component{
    
    render() {
        let props = {
            to:this.props.path,
            activeClassName:"active",
            onlyActiveOnIndex: this.props.onlyActiveOnIndex
        }
        
        return (
            <Link {...props}> {this.props.name} </ Link> 
        )
    }  
}

export default NavLink