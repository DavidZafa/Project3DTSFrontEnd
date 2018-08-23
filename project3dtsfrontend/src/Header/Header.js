
import React, { Component } from "react";
import './Header.css'
import {Link} from 'react-router-dom'

class Header extends Component{
  render() {
    return(
      <header>
      <nav>
        
          <div className="nav-item"><Link to='/'>Home</Link></div>
          {this.props.isLoggedIn ? (<div><div className="nav-item"><Link to='/user/:id'>User Page</Link></div>
          <div className="nav-item"><Link to="/">Log Out</Link></div></div>
) : (<div>
  <div className="nav-item"><Link to='/signup'>Signup</Link></div>
          <div className="nav-item"><Link to='/login'>Login</Link></div>
</div>
)}
       <div className="nav-item"><Link to = '/animals'>Animals</Link></div>
          <div className="nav-item"><Link to ='/donate'>Donate</Link></div>
        
      </nav>
    </header>
    )
  }

}


export default Header
