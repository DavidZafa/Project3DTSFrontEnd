
import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => (
  <header>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/signup'>Signup</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/user/:id'>User Page</Link></li>
          <li><Link to = '/animals'>Animals</Link></li>
          <li><Link to ='/donate'>Donate</Link></li>
        </ul>
      </nav>
    </header>
)

export default Header
