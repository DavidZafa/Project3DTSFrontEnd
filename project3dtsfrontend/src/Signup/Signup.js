
import React, { Component } from 'react';
class Signup extends Component {

  render () {
    return (
      <div className="card">
      <h1>Sign Up</h1>
      <form>
        <div className="">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            onChange={this.props.handleInput}
            name="email"
            placeholder="email"
          />
        </div>

        <div className="">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={this.props.handleInput}
            name="password"
            placeholder="password"
          />
        </div>

        <input type="submit" value="submit" onClick={this.props.handleSignUp} />
      </form>
    </div>
    )
  }
}

export default Signup;
