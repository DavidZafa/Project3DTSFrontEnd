
import React, { Component } from 'react';

class Signup extends Component {


  render () {
    return (
      <form>
      <div>
        <h2>Sign up</h2>
        <label htmlFor="email">Email address</label>
          <input type="email" required className="form-control" name="email"
            placeholder="Email"
            onChange={this.handleInput}  />
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password"
            placeholder="Password"

            onChange={this.handleInput}  />
        </div>
        <button type="submit" onClick={this.props.handleSignUp} className="btn btn-primary" >Sign up</button>
      </form>
    )
  }
}

export default Signup;
