import React from 'react'
import { ReactDOM } from 'react'
import DOM from 'react-dom'
import Sidebar from './Sidebar'
import Body from './Body'
import { Route } from 'react-router'
import Home from './Home'

class Main extends React.Component{

    handleResize() {
        this.props.windowResize(window.innerHeight, window.innerWidth)
        this.forceUpdate()
    }

    componentDidMount() {
        console.log(this.props)

        let height = window.innerHeight
        let width = window.innerWidth

        this.props.windowResize(height, width)

        //Boston.create( this.refs.node, {width, height}, null);
        window.addEventListener('resize', this.handleResize.bind(this))
    }

    componentWillUnmount(){
        window.removeEventListener('click', this.props.windowResize(500,600))
    }

    render() {

        return (
            <div className="splitter">
                <Sidebar />
                <Body>{ this.props.children || <Home/> }</Body>
            </div>
            )
       }
}

export default Main