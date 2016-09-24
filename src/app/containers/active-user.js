import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Details extends Component {

  render(){
    if(this.props.activeuser !== null){
      return (
        <span>{this.props.activeuser.first}</span>
      )
    }
    else
        return (<div></div>)
  }
}

function mapStateToProps(state) {
  return {
    activeuser: state.activeUser
  }
}

export default connect(mapStateToProps)(Details)
