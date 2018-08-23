import React, { Component } from "react";
import axios from "axios";
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
      <div>
        <ul key={i}>
          <li>
            <img src={animal.picture} alt="error" />
          </li>
          <li>Name: {animal.name}</li>
          <li>Scientific Name: {animal.species}</li>
          <li>Region: {animal.region}</li>
          <li>Habitat: {animal.habitat}</li>
          <li>Region: {animal.population}</li>
          <li>{animal.about}</li>
        </ul>
      </div>
    ));

    return <div className="animal">{animalList}</div>;
  }
}

export default Animals;
