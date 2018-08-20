import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import AllAnimals from './AllAnimals'
import Animal from './Animal'


const Main = () => (
  <main>
  <Switch>
  <Route exact path = '/' component = {Home}/>
  <Route path = '/login' component = {Login}/>
  <Route path = '/signup' component = {Signup}/>
  <Route path = '/animals' component = {Animal}/>
  </Switch>
  </main>
)

export default Main
