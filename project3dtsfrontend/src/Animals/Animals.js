
import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import ShowAnimals from './ShowAnimals'
import ShowChanges from './ShowChanges'
import './Animals.css'

const url = 'http://localhost:3001/animals'
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

//https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
// checkForRepeat(){
//   let arr = this.state.selectAnimalArr
//   let check = arr.filter((item, position) =>
//   {return self.indexOf(item) == position})
//   return check
// }

// getAnimal = e => {
//   e.preventDefault()
//   const animalArr = {}
//   animalArr[e.target.name] = e.target.value;
//   // let list = Array.from(this.state.selectAnimalArr)
//   // list.push(animalArr)
//   // this.setState({selectAnimalArr: list})
//   console.log(this.state.selectAnimal)
//   this.setState({selectAnimal: animalArr})

// }

// addAnimal = e => {
//   e.preventDefault()
//   // axios.post('http://localhost:3001/' + this.state.user + '/animal/' + this.state.selectAnimal + '/add')
//     axios.post('http://localhost:3001/' + this.state.user + '/animal/' + this.state.selectAnimal + '/add')

// }

render () {
  const user = this.state.user  
  let showChanges = <ShowChanges addAnimal={this.props.addAnimal} />
  let animalList = this.state.animals
  let showAnimals
if(animalList.length === 0 ) {
  showAnimals = <div>Loading</div>
} else if (animalList.length > 0) {
  showAnimals = animalList.map(animalInstance => {
    return (
    <div key={animalInstance._id}>
        <div className="carousel carousel-slider">
        <ShowAnimals getAnimal={this.props.getAnimal} userID={this.state.user} data={animalInstance}/>
        </div>
    </div>)
  })
} else {
  showAnimals = <div>System Failure</div>
}
  return (
    <div>
    <h1>Animals</h1>
    {/* <Link to={`/user/${user}`}> */}
    {/* {showChanges} */}
    {/* </Link> */}
    {showChanges}
    {showAnimals}
    </div>
  )
}}

export default Animals;