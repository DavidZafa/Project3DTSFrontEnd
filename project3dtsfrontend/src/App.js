import React, { Component } from 'react'
import logo from './logo.svg'
import Header from './Header'
import Main from './Main'
import { Route, Link, Switch } from "react-router-dom"
import axios from 'axios'
import ShowAnimals from './ShowAnimals'
import Signup from './Signup'
import Login from './Login'
class App extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      isLoggedIn: false
    }

  }

  componentDidMount () {
    if(localStorage.token) {
      this.setState({
        isLoggedin: true
      })
    }else {
      this.setsTATE({
        isLoggedIn: false
      })
    }
  }
  handleLogOut(){

  }

  handleInput(e){
    this.setState({
      [e.targer.name]: e.target.value
    })
  }
  handleSignUp(e){

  }
  handleLogIn(e){

  }

  render() {
    return (
      <div>
      <Header isLoggedIn={this.state.isLoggedIn} />
      <div className = 'body'>
      <Switch>
      <Route path = '/signup'
      render={(props) =>{
        </div>
  // <Header/>
  // <Main/>



    );
  }
}

export default App;
