
import React, { Component } from "react";
import {Link} from 'react-router-dom'

class Header extends Component{
  render() {
    return(
      <header>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          {this.props.isLoggedIn ? (          <li><Link to='/user/:id'>User Page</Link></li>
) : (<div>
  <li><Link to='/signup'>Signup</Link></li>
          <li><Link to='/login'>Login</Link></li>
</div>
)}
       <li><Link to = '/animals'>Animals</Link></li>
          <li><Link to ='/donate'>Donate</Link></li>
        </ul>
      </nav>
    </header>
    )
  }

}


export default Header
