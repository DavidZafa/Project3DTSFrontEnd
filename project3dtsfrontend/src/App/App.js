import React, { Component } from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
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
