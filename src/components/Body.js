import React from 'react'
import { ReactDOM } from 'react'
import { Route } from 'react-router'
import DOM from 'react-dom'
import { connect } from 'react-redux'
import Home from './Home'

class Body extends React.Component {

    render() {
        let title = "Home";
        // if (this.props.params === undefined)
        //     title =  "Home";

        // else {  title = this.props.params.section   }

        return (
            <div className="main_wrapper">
                <h1>{title}</h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
}


function mapStateToProps(state) {
    const route = state.routing.locationBeforeTransitions;
    const Library = state.Library;
    return { route, Library }
}

export default connect(mapStateToProps)(Body)