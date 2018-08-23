import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Home from '../Home/Home'
import News from '../News/News'
import Donate from '../Donate/Donate'
import Animals from '../Animals/Animals'
import User from '../User/User'

class Main extends Component {
constructor(props){
  super(props)
  this.state = {
    isLoggedIn: this.props.isLoggedIn
  }
}
render(){
return(
  <Switch>
  <Route exact path = '/' component = {Home}/>
  <Route exact path = '/login' render = {() => {
    return(<Login isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleLogIn = {this.handleLogIn} />
    )
  }}
/>
  <Route path = '/signup' render ={() => {
    return(<Signup isLoggedIn = {this.state.isLoggedIn} handleInput = {this.handleInput} handleSignUp={this.handleSignup}  />
  )
  }}
  />

  <Route path = '/user/:id' component = {User}/>








  <Route path = '/news' component = {News}/>
  <Route path = '/animals' component = {Animals}/>
  <Route path ='/donate' component = {Donate}/>
  </Switch>
)
}
}

export default Main
