import React from 'react'
import { ReactDOM } from 'react'
import DOM from 'react-dom'
import Gallery from './Gallery'

class Portfolio extends React.Component {

 render() {
  return(
   <div className="Portfolio">
     <h1> Portfolio </h1>
     <Gallery {...this.props} />
   </div>
  )
 }
}

export default Portfolio