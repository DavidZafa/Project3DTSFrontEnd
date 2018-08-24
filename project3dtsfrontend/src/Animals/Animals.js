import React, {Component} from 'react'
import axios from 'axios'
import ShowAnimals from './ShowAnimals'

const url = 'http://localhost:3001/animals'
class Animals extends Component {
  constructor(){
    super()
    this.state = {
      animals:[]
  }
}

componentDidMount(){
  axios.get(url)
  .then(res => {
    this.setState({
      animals: res.data
    })
  })
  .catch(err => console.log(err))
}

render () {
  let animalList = this.state.animals
  let showAnimals
if(animalList.length === 0 ) {
  showAnimals = <div>Loading</div>
} else if (animalList.length > 0) {
  showAnimals = animalList.map(animalInstance => {
    return (
    <div key={animalInstance._id}>
        <div className="carousel carousel-slider">
        <ShowAnimals data={animalInstance}/>
        </div>
    </div>)
  })
} else {
  showAnimals = <div>System Failure</div>
}
  return (
    <div>
    <h1>Animals</h1>
    {showAnimals}
    </div>
  )
}


}


export default Animals
