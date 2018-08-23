// import React, {Component} from 'react'
// import axios from 'axios'

// const url = 'http://localhost:3001/animals'
// class Animals extends Component {
//   constructor(){
//     super()
//     this.state = {
//       animals:[]
//   }
// }

// componentDidMount(){
//   axios.get(url)
//   .then(res => {
//     console.log(res.data)
//     this.setState({
//       animals: this.state.animals.push(res.data)
//     })
//   })
// }

// render () {
//   return (
//     <div>
//     <h1>Animals</h1>
//       <img src = '' alt=""/>
//     </div>
//   )
// }


// }


// export default Animals

import React, { Component } from "react";
import axios from "axios";
import '../Animals/Animals.css'
// import ReactDOM from "react-dom";
// import { lightBlack } from "material-ui/styles/colors";
// import Route from "react-router-dom";
// const axios = require("axios");
const URL = "http://localhost:3001/animals";
class Animals extends Component {
  constructor() {
    super();
    this.state = {
      animals: []
    };
  }
  componentDidMount() {
    axios
      .get(URL)
      .then(res => {
        let animals = res.data;
        console.log(animals);
        //handle success
        this.setState({ animals });
      })
      .catch(error => {
        //handle error
        console.log(error);
      });
  }
  render() {
    const animalList = this.state.animals.map((animal, i) => (
      <div className="card animal-container">
        <ul key={i}>
          <div class="card-image img-container">
            <img src={animal.picture} className="animals-img" alt="error" />
          </div>
          <div className="card-content">
          <li>Name: {animal.name}</li>
          <li>Scientific Name: {animal.species}</li>
          <li>Region: {animal.region}</li>
          <li>Habitat: {animal.habitat}</li>
          <li>Region: {animal.population}</li>
          <li>{animal.about}</li>
          </div>
        </ul>
      </div>
    ));
    return <div className="animal-wrapper">{animalList}</div>;
  }
}
export default Animals;