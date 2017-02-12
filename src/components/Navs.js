import React from 'react';
import { ReactDOM } from 'react';
import DOM from 'react-dom';
import { Link } from 'react-router';
import NavLink from './NavLink';
import DropDown from './DropDown'

class Navs extends React.Component {

    render() {
        let props = this.props
        return (
            <ul>
                <li><NavLink path="/" name="Home" /></li>
                <li><NavLink path="/About" name="About" /></li>
                <li><DropDown path="/Portfolio" name="Portfolio">
                    <NavLink path="/Portfolio/Design" name="Design" />
                    <NavLink path="/Portfolio/FeedBack" name="Feedback"/>
                    <NavLink path="/Portfolio/Engineering" name="Engineering"/>
                </ DropDown></li>
                <li><NavLink path="/Contact" name="Contact" /></li>
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