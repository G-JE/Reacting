import React from 'react'
import { ReactDOM } from 'react'
import DOM from 'react-dom'

class Quote extends React.Component{
    
 render() {
   let quote = this.props.Library.text;
   let author = this.props.Library.author;
  return (
    <div className="quote_container">
      <div className="corner_accent left"></div>
        <blockquote> 
          <p>{quote}</p>
          <cite> - {author} </cite> 
        </blockquote>
      <div className="corner_accent right"></div>
  </div>
    )
  }  
}

export default Quote