import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Navbar, NavItem} from 'react-materialize'
import './Header.css'

class Header extends Component {
  render () {
    let navBarItems = [<NavItem key={1} href='/'>Animals</NavItem>]
    if (this.props.isLoggedIn) {
      navBarItems.push(<NavItem key={2} href='/logout'>Log Out</NavItem>)
    } else {
      navBarItems.push(<NavItem key={3} href='/signup'>Sign Up</NavItem>)
      navBarItems.push(<NavItem key={4} href='/login'>Log In</NavItem>)
    }
    return (
      <Navbar brand='DangerZone' className='nav' right>
        {navBarItems}
      </Navbar>
    )
  }
}


// const Header = () => (
//
//
//   <header>
//
//
//           <Button><Link to='/'>Home</Link></Button>
//           <Button><Link to='/signup'>Signup</Link></Button>
//           <Button><Link to='/login'>Login</Link></Button>
//           <Button><Link to = '/animals'>Animals</Link></Button>
//           <Button><Link to = '/donate'>Donate</Link></Button>
//
//
//     </header>
// )

export default Header
