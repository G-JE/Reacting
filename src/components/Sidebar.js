import React from 'react'
import { ReactDOM } from 'react'
import DOM from 'react-dom'
import Navs from './Navs'
import Logo from'./Logo'

class Sidebar extends React.Component{

    render() {
        let props =  this.props
        return (
            <div className="side_bar_wrapper">
                <div className="side_bar">
                    <Logo />
                    <Navs /> 
                </div>
            </div>
            )
       }  
}

export default Sidebar