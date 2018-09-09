import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AnimalList from "../User/AnimalList";
import "./User.css";

const url = "http://localhost:3001/user/";
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.userID,
      userAnimalList: this.props.userAnimalList
    };
  }

  componentDidMount() {
    axios
      .get(url + this.state.user)
      .then(res => {
        console.log(res.data);
        this.setState({
          userAnimalList: res.data.animalList
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteUser() {
    axios({
      method: "delete",
      url: "http://localhost:3001/user/"
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(response) {
        console.log(response);
      });
  }

  render() {
    let user = this.state.user;
    let animal = this.state.userAnimalList;
    let showAnimalList;

    if (user === undefined) {
      showAnimalList = (
        <div>
          <h1>You Are Not Logged In</h1>
        </div>
      );
    } else if (animal.length === 0 || animal === null) {
      showAnimalList = (
        <div>
          <h5>No animals to track</h5>
          <Link to="/animals">Add Some</Link>
        </div>
      );
    } else if (animal !== undefined) {
      showAnimalList = animal.map((animal, i) => {
        return (
          <div key={i}>
            <AnimalList
              user={this.state.user}
              getAnimal={this.getAnimal}
              handleDelete={this.props.handleDelete}
              data={animal}
            />
          </div>
        );
      });
    } else {
      return (
        <div>
          <p>System Failure. Try</p>
          <Link to="/login">logging in again</Link>
        </div>
      );
    }

    return (
      <div className="user-page-container">
        <div className="user-box">
          <img
            src="https://sg-fs.com/wp-content/uploads/2017/08/user-placeholder.png"
            alt="profile pic"
          />
          <h5>Username Goes Here</h5>
          <Link to={"/"}>
            <input
              type="submit"
              value="DELETE"
              onClick={this.deleteUser.bind(this)}
            />
          </Link>
        </div>
        <div className="user-animallist">{showAnimalList}</div>
      </div>
    );
  }
}

export default User;
