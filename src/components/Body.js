import React from 'react'
import { ReactDOM } from 'react'
import { Route } from 'react-router'
import DOM from 'react-dom'
import {connect} from 'react-redux'

class Body extends React.Component {

    render() {
        let title;
        let routepath = this.props.pathname
        if (routepath == "/")
            title = "Home"
        else {  
            title = routepath.slice(1)
        }

        return (
            <div className="main_wrapper">
                <h1>{title}</h1>
                {this.props.children}
            </div>
            )
    }
}

function mapStateToProps(state){
    return state.routing.locationBeforeTransitions
}

export default connect(mapStateToProps)(Body)