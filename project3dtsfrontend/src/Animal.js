import React, {Component} from 'react'
import AnimalAPI from './api'
import {Link} from 'react-router-dom'

const Animal = (props) => {
  const animal = AnimalAPI.get(
    parseInt(props.match.params.animal, 10)
  )
  if(!animal) {
    return("no")
  }
  return(
    <div>
    <h1>{animal.animal}</h1>
    <h2>{animal.type}</h2>
    <Link to = 'animal-list'>Back</Link>
    </div>
  )
}

export default Animal
