import React from 'react'
import { ReactDOM } from 'react'
import { Route } from 'react-router'
import DOM from 'react-dom'
import { connect } from 'react-redux'
import Home from './Home'

class Body extends React.Component {

    render() {
        let title = "Home";
        //  if (this.props.route.params === undefined)
        //     title =  "Home";

        //  else {  title = this.props.params   }

        return (
            <div className="main_wrapper">
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
}


function mapStateToProps(state) {
    const route = state.route;
    const Library = state.Library;
    return { route, Library }
}

export default connect(mapStateToProps)(Body)