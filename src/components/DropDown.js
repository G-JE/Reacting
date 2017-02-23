import React from 'react'
import { ReactDOM } from 'react'
import DOM from 'react-dom'
import { Link } from 'react-router'
import NavLink from './NavLink'

class DropDown extends React.Component {
    
    constructor(props){
      super(props);

      this.state = {toggled: false};

      this.Toggle = this.Toggle.bind(this);
      this.close = this.close.bind(this);
    }

    Toggle(){
     this.setState((prev) =>({
        toggled: !prev.toggled
      })
     )}

     close(){
       this.setState(()=>({
         toggled: false
       }))
     }
    
    render() {
      let open = this.state.toggled;
        return (
          <div className="drop" onMouseLeave={this.close}>
            <div className="horizontal" >
              <Link to={this.props.path} onClick={this.Toggle} className="nav_link" activeClassName="active" > {this.props.name}</ Link>
              <span className={(open)?"arrow_carrot-down": "arrow_carrot-right"}></span>
            </div>
            <ul className="dropdown" className={(open) ? "show": "hide"}>
              {this.props.children}
            </ul>
          </div>
        )
    }  
}

export default DropDown