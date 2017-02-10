import React from 'react'
import { ReactDOM } from 'react'
import DOM from 'react-dom'
import Quote from './Quote'

class Home extends React.Component{
    
    render() {
        return (
            <div className="Home">
                <Quote Library={this.props.Library.quotes[Math.floor(Math.random()*(this.props.Library.quotes.length))]}/>
                <svg xmlns="http://www.w3.org/2000/svg">
                <glyph unicode="&#x21;" d="M 272,32C 280.832,32, 288,39.168, 288,48L 288,361.376 l 68.672-68.672c 6.24-6.24, 16.384-6.24, 22.624,0
                    c 6.24,6.24, 6.24,16.384,0,22.624l-96,96C 281.824,412.8, 280.064,413.952, 278.112,414.752c-3.904,1.632-8.32,1.632-12.224,0
                    C 263.968,413.984, 262.272,412.832, 260.8,411.392C 260.768,411.36, 260.736,411.36, 260.672,411.328l-96-96c-6.24-6.24-6.24-16.384,0-22.624
                    c 6.24-6.24, 16.384-6.24, 22.624,0L 256,361.376L 256,48 C 256,39.168, 263.168,32, 272,32z"  />
                    </svg>
             </div>
        )
    }  
}

export default Home