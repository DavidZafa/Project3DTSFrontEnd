import React, { Component } from "react";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      password: this.props.password,
      userID: this.props.userID,
      isLoggedIn: this.props.isLoggedIn
    };
  }
  componentDidMount() {
    this.setState({
      email: "",
      password: "",
      userID: "",
      isLoggedIn: false
    });
    localStorage.clear();
  }

  render() {
    return (
      <div>
        <h1>User logged out.</h1>
        <p>Please refresh</p>
      </div>
    );
  }
}

export default Logout;
