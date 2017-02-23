import React from 'react'
import { ReactDOM } from 'react'
import DOM from 'react-dom'

class Logo extends React.Component{


    render() {
        let props =  this.props
        
        let styles = {
            width: '150px',
            height: '150px',
            display: 'block',
            borderRadius: '50%'
        }

        return ( <img style={styles} className="image" src="./Images/Brand.png"></img> )

    }  
}

export default Logo