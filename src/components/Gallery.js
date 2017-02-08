import React from 'react'
import { ReactDOM } from 'react'
import DOM from 'react-dom'

class Gallery extends React.Component{
    
    render() {

        let nums = [1,1,1,1,1]

        let gall = nums.map( (num,i) => {
                 return (
                        <div key={i} className="gallery_item">
                        I am a Gallery Item
                        </div>
                     )
            })

        return (
            <div className="gallery">
                {gall}
             </div>
        )
    }  
}

export default Gallery