import React, { Component } from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import { Route, Link, Switch } from "react-router-dom"
import axios from 'axios'
const signupURL = 'http://localhost:3000/user/signup'
const loginURL = 'http://localhost:3000/user/login'
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false
    }
  }

componentDidMount () {
  if(localStorage.token) {
    this.setState({
      isLoggedIn: true
    })
  } else {
    this.setState({
      isLoggedIn: false
    })
  }
}

  handleInput = e => {
    const UserState = this.state
    UserState[e.target.name] = e.target.value
    console.log(UserState)
    this.setState(UserState)
  }

  handleSignUp = e => {
    console.log(this.state)
    e.preventDefault()
    axios.post(signupURL, {user: this.state.username, password:this.state.password})
    .then(res => {
      localStorage.token = res.data.token
    })
    .catch(err => console.log(err))
  }

  handleLogIn(e) {
    e.preventDefault()
    axios.post(loginURL, {username: this.state.username, password: this.state.passworn})
    .then(res => {
      localStorage.token = res.data.token
      this.setState({isLoggedIn: true})
    })
    .catch(err => console.log(err))
  }




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
