import React from 'react'
import { ReactDOM } from 'react'
import { Route } from 'react-router'
import DOM from 'react-dom'
import { connect } from 'react-redux'

class Body extends React.Component {

    render() {
        let title;
        let routepath = this.props.route.pathname
        if (routepath == "/")
            title = "Home"
        else {
            title = routepath.slice(1)
        }

        return (
            <div className="main_wrapper">
                <h1>{title}</h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const route = state.routing.locationBeforeTransitions
    const about = state.about
    const images = state.images
    return { route, about, images }
}

export default connect(mapStateToProps)(Body)