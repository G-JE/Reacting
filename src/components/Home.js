import React from 'react'
import { ReactDOM } from 'react'
import DOM from 'react-dom'
import Quote from './Quote'

class Home extends React.Component{
    
    render() {
        let ranIndex = Math.floor(Math.random()*(this.props.Library.quotes.length));
        return (
            <div className="fill">
                <h1>Home</h1>
                <Quote Library={this.props.Library.quotes[ranIndex]}/>
             </div>
        )
    }  
}

export default Home