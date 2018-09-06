
import React, {Component} from 'react'
import axios from 'axios'
// import {Link} from 'react-router-dom'
import ShowAnimals from './ShowAnimals'
// import ShowChanges from './ShowChanges'
import './Animals.css'

const url = 'https://dangerzone1.herokuapp.com/animals'
class Animals extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: this.props.userID,
      animals:[],
      // selectAnimal: ''
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
  const user = this.state.user  
  // let showChanges = <ShowChanges addAnimal={this.addAnimal} />
  let animalList = this.state.animals
  let showAnimals
if(animalList.length === 0 ) {
  showAnimals = <div>Loading</div>
} else if (animalList.length > 0) {
  showAnimals = animalList.map(animalInstance => {
    return (
    <div key={animalInstance._id}>
        <div>
        <ShowAnimals getAnimal={this.props.getAnimal} userID={user} data={animalInstance}/>
        </div>
    </div>)
  })
} else {
  showAnimals = <div>System Failure</div>
}
  return (
    <div className="container-fluid">
    <h1>Animals</h1>
    {/* {showChanges} */}
    <div className="container">
    {showAnimals}
    </div>
    </div>
  )
}}

export default Animals;