import React, {Component} from 'react'
import axios from 'axios'

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
    console.log(res.data)
    this.setState({
      animals: this.state.animals.push(res.data)
    })
  })
}

render () {
  return (
    <div>
    <h1>Animals</h1>
      <img src = '' alt=""/>
    </div>
  )
}


}


export default Animals
