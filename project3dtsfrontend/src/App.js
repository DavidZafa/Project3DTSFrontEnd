import React, { Component } from 'react'
import logo from './logo.svg'
import Header from './Header'
import Main from './Main'
import { Route, Link, Switch } from "react-router-dom"
import axios from 'axios'
import ShowAnimals from './ShowAnimals'
import Signup from './Signup'
import Login from './Login'
import Logout from './Logout'
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
      [e.target.name]: e.target.value
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
        return(
          <Signup isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleSignup={this.handleSignUp}/>
        )
      }}
      />
      <Route path = '/logout'
      render={(props) =>{
        return(
          <Logout isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut}/>
        )
      }}
      />
      <Route path = '/login'
      render={(props) => {
        return(
          Login isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleLogIn={this.handleLogIn}/>
        )
      }}
      />
      <Route path = '/'
      render = {() =>{
      return (
        <Home isLoggedIn={this.state.isLoggedIn} />
        Main
      )
    }}
    />
    </Switch>
    </div>
    </div>
  // <Header/>
  // <Main/>



    )
  }
}

export default App;
