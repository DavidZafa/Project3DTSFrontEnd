import React, { Component } from 'react'
import Header from '../Header/Header'
import { Route, Switch } from "react-router-dom"
import axios from 'axios'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Logout from '../Logout/Logout'
import User from '../User/User'
import News from '../News/News'
import Animals from '../Animals/Animals'
import Donate from '../Donate/Donate'
import Signup from '../Signup/Signup'
const userURL = 'http://localhost:3001/user/'
const signupURL = 'http://localhost:3001/user/signup'
const loginURL = 'http://localhost:3001/user/login'
class App extends Component {
  constructor () {
    super();
    this.state = {
      email: '',
      password: '',
      user: {},
      isLoggedIn: false
    }
  }

  componentDidMount () {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
  }

  // getUser() {
  //   axios.get(userURL + )
  // }

  handleInput = e => {
        const userState = this.state;
        userState[e.target.name] = e.target.value;
        console.log(userState);
        this.setState(userState);
      }

      handleSignUp = e => {
        e.preventDefault();
        axios.post(signupURL, {
            email: this.state.email,
            password: this.state.password
          })
          .then(response => {
            localStorage.token = response.data.token;
            this.setState({isLoggedIn: true})
            console.log(localStorage.token)
          })
          .catch(err => console.log(err));
      };

      handleLogIn = e => {
        e.preventDefault()
        axios.post(loginURL, {
            email: this.state.email,
            password: this.state.password
        })
        .then(res => {
            localStorage.token = res.data.token
            this.setState({isLoggedIn: true})
        })
        .catch(err => console.log(err))
    }

    handleLogOut() {
      this.setState({
        username: '',
        password: '',
        isLoggedIn: false
      })
      localStorage.clear()
    }

    

  render() {
    return (
      <div>


  <Header isLoggedIn={this.state.isLoggedIn}/>
  <Switch>
  <Route exact path = '/' render={() => {
        return(
          <Home isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut} />
        )
    }}
  />
  <Route exact path = '/login' render = {(props) => {
    return(
    <Login 
    isLoggedIn={this.state.isLoggedIn} 
    handleInput={this.handleInput} 
    handleLogIn = {this.handleLogIn} />
    )
  }}
  />
  <Route path = '/signup' render ={(props) => {
    return(<Signup 
      isLoggedIn = {this.state.isLoggedIn} 
      handleInput = {this.handleInput} 
      handleSignUp={this.handleSignUp}  />
  )
  }}
  />
  <Route path ='/logout' render={() => {
    return(
      <Logout  isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut}/>
    )
  }}/>



  <Route path = '/user/:id' render={() => {
    return(
        <User/>
    )
  }}/>








  <Route path = '/news' component = {News}/>
  <Route path = '/animals' component = {Animals}/>
  <Route path ='/donate' component = {Donate}/>
  </Switch>
</div>


    );
  }
}

export default App;
