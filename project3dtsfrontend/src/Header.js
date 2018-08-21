import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-materialize'
import './Header.css'
const Header = () => (


  <header className = "navigate">

        <ul>
          <li><Button><Link to='/'>Home</Link></Button></li>
          <li><Button><Link to='/signup'>Signup</Link></Button></li>
          <li><Button><Link to='/login'>Login</Link></Button></li>
          <li><Button><Link to = '/animals'>Animals</Link></Button></li>
          <li><Button><Link to = '/donate'>Donate</Link></Button></li>
        </ul>

    </header>
)

export default Header
