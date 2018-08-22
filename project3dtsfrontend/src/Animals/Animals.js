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
    const animalList = this.state.animals.map(animal => (
      <div>
        <ul>
          <li key={animal._id}>{animal.name}</li>
          <li> {animal.species}</li>
          <li>{animal.about}</li>
        </ul>
      </div>
    ));

    return <div className="animal">{animalList}</div>;
  }
}

export default Animals;
