import React from 'react'
import { ReactDOM } from 'react'
import DOM from 'react-dom'
import { Link } from 'react-router'

class Navs extends React.Component {

    render() {
        let props = this.props
        return (
            <ul>
                <li><Link to="/" activeClassName="active">Home</Link></li>
                <li><Link to="/About" activeClassName="active">About</Link></li>
                <li><Link to="/Portfolio" activeClassName="active">Portfolio</Link></li>
                <li><Link to="/Contact" activeClassName="active">Contact</Link></li>
                <ul className="social_list">
                    <li><a href="https://www.instagram.com/gundogmillionaire"><span className="social_instagram icon_list"></span></a></li>
                    <li><a href="https://www.linkedin.com/in/gunnarerickson"><span className="social_linkedin icon_list"></span></a></li>
                    <li><a href="https://github.com/G-JE"><span className="social_share icon_list"></span></a></li>
                </ul>
            </ul>
        )
    }
}

export default Navs