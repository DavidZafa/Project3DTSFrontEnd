import React, { Component } from 'react'
import logo from './logo.svg'
import Header from './Header'
import Main from './Main'
import { Route, Link, Switch } from "react-router-dom"

class App extends Component {


  render() {
    return (
      <div>


  <Header/>
  <Main/>
</div>


    );
  }
}

export default App;
