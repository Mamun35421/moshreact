import React, { Component } from 'react'

class Navbar extends Component {
    render() { 
        return (<nav className="navbar navbar-light bg-dark">
        
          <a className="navbar-brand" href="hhh">
              Navbar{" "}<span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span></a>
        
      </nav>);
    }
}
 
export default Navbar;

