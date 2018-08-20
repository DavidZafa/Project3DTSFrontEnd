import React, { Component } from 'react'
import logo from './logo.svg'
import Signup from './Signup'
import Login from './Login'
import { Route, Link, Switch } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div>
    <Login/>
    <Signup/>
</div>



    );
  }
}

export default App;
