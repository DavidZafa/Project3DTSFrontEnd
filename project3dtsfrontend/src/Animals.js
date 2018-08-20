import React from 'react'
import AnimalAPI from './api'
import {Link} from 'react-router-dom'

const AllAnimals = () => (
  <div>
  <ul>
  {
    AnimalAPI.all().map(a => (
      <li key = {a.number}>
      <Link to = {'/animals'${a.animal}}</Link>
      </l1>

    ))
  }
  </ul>
  </div>
)

export default Animals
