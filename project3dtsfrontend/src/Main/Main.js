import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Home from '../Home/Home'
import News from '../News/News'
import Donate from '../Donate/Donate'
import Animals from '../Animals/Animals'
import User from '../User/User'

const Main = () => (
  <Switch>
  <Route exact path = '/' component = {Home}/>
  <Route path = '/login' component = {Login}/>
  <Route path = '/signup' component = {Signup}/>
  <Route path = '/user/:id' component = {User}/>
  <Route path = '/news' component = {News}/>
  <Route path = '/animals' component = {Animals}/>
  <Route path ='/donate' component = {Donate}/>
  </Switch>

)

export default Main
