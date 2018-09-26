import React, { Component } from "react";
import './Header.css'
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    const userID = this.props.userID
    return (
        <nav className="navbar">
          <ul className="ul-item">
            <li className="li-item">
              <Link to="/">Home</Link>
            </li>
            {this.props.isLoggedIn ? (
              <div>
                <li className="li-item">
                <Link to={`/user/${userID}`}>User Page</Link>
              </li>
                <li className="li-item"><Link to="/logout">Log Out</Link> </li>
              </div>
            ) : (
              <div>
                <li className="li-item">
                  <Link to="/signup">Signup</Link>
                </li>
                <li className="li-item">
                  <Link to="/login">Login</Link>
                </li>
              </div>
            )}
            <li className="li-item">
              <Link to="/animals">Animals</Link>
            </li>
            <li className="li-item">
              <Link to="/donate">Donate</Link>
            </li>
          </ul>
        </nav>
    );
  }
}

export default Header;
