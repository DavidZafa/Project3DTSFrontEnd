import React from 'react'
import AnimalAPI from './api'
import {Link} from 'react-router-dom'

const AllAnimal = () => (
  <div>
  <ul>
  {
    AnimalAPI.all().map(a => (
      <li key = {a.name}>
      <Link to = '/animals'</Link>
      </l1>

    ))
  }
  </ul>
  </div>
)

export default Animals
