import React, { Component } from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import { Route, Link, Switch } from "react-router-dom"
import axios from 'axios'
import Home from '../Home/Home'
import Login from '../Login/Login'
import User from '../User/User'
import News from '../News/News'
import Animals from '../Animals/Animals'
import Donate from '../Donate/Donate'
import Signup from '../Signup/Signup'
const signupURL = 'http://localhost:3001/user/signup'
const loginURL = 'http://localhost:3001/user/login'
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false
    }
  }

ComponentDidMount () {
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
    axios.post(loginURL, {username: this.state.username, password: this.state.password})
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
  <Switch>
  <Route exact path = '/' component = {Home}/>
  <Route exact path = '/login' render = {(props) => {
    return(<Login isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleLogIn = {this.handleLogIn} />
    )
  }}
  />
  <Route path = '/signup' render ={(props) => {
    return(<Signup isLoggedIn = {this.state.isLoggedIn} handleInput = {this.handleInput} handleSignUp={this.handleSignup}  />
  )
  }}
  />

  <Route path = '/user/:id' component = {User}/>








  <Route path = '/news' component = {News}/>
  <Route path = '/animals' component = {Animals}/>
  <Route path ='/donate' component = {Donate}/>
  </Switch>
</div>


    );
  }
}

export default App;
