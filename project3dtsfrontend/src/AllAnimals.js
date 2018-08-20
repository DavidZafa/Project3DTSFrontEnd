import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Animals from './Animals'
import Animal from './Animal'

const AllAnimals = () => (
  <Switch>
  <Route exact path = '/animals' component = {AllAnimals}/>
  <Route path = '/animal/:name' component = {Animal}/>
  </Switch>
)

export default AllAnimals
