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
        console.log(res.data);
        //handle success
        this.setState({ animals: res.data });
      })
      .catch(error => {
        //handle error
        console.log(error);
      });
  }

  render() {
    if (this.state.animals != undefined) {
      return (
        <ul>
          {this.state.animals.map(animal => {
            <li>
              <div key={animal._id}>{animal.name}</div>
            </li>;
          })}
        </ul>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default Animals;
