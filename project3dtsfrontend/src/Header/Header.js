import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    const userID = this.props.userID
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {this.props.isLoggedIn ? (
              <div>
                <li>
                <Link to={`/user/${userID}`}>User Page</Link>
              </li>
                <li><Link to="/logout">Log Out</Link></li>
              </div>
            ) : (
              <div>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </div>
            )}
            <li>
              <Link to="/animals">Animals</Link>
            </li>
            <li>
              <Link to="/donate">Donate</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
