import React from 'react'
import { ReactDOM } from 'react'
import DOM from 'react-dom'
import { Link } from 'react-router'

class Navs extends React.Component{

    render() {
        let props =  this.props
        return (
            <ul>
                <li><Link to="/" activeClassName="active">Home</Link></li>
                <li><Link to="/About" activeClassName="active">About</Link></li>
                <li><Link to="/Portfolio" activeClassName="active">Portfolio</Link></li>
                <li><Link to="/Contact" activeClassName="active">Contact</Link></li>
                <ul className="social_list">
                    <li><a href="https://www.instagram.com/gundogmillionaire"><span data-icon="&#xe09a;"></span></a></li>
                    <li><a href="https://www.linkedin.com/in/gunnarerickson"><span data-icon="&#xe09d;"></span></a></li>
                    <li><a href="https://github.com/G-JE"><span data-icon="&#xe0a0;"></span></a></li>
                </ul>
            </ul>
            )
       }  
}

export default Navs