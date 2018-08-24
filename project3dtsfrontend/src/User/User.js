import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import AnimalList from "../User/AnimalList";
// import ShowNews from '../News/ShowNews'


const url = "http://localhost:3001/user/";
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.userID,
      animalList: []
    };
  }

  componentDidMount() {
    axios
      .get(url + this.state.user)
      .then(res => {
        console.log(res.data)
        this.setState({
          animalList: res.data.animalList
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let user = this.state.user
    let animal = this.state.animalList
    let showAnimalList

    if (user === undefined) {
      showAnimalList = <div><h1>You Are Not Logged In</h1></div>;
    } 
     else if (animal.length === 0) {
      showAnimalList = 
      (<div>
        <h5>No animals to track</h5>
        <Link to="/animals">Add Some</Link>
        </div>)
    } else if (animal !== undefined) {
      showAnimalList = animal.map(animal => {
        return (
          <div key={animal._id}>
            <AnimalList data={animal} />
          </div>
        );
      });
    } else {
      return <div>
        <p>System Failure. Try</p>
        <Link to="/login">logging in again</Link>
        </div>
    } 

  
    // else {
    //   showAnimalList = <div>Loading...</div>
    // }

    return (
      <div>
        <div className="user-box">
          <img src="http://sg-fs.com/wp-content/uploads/2017/08/user-placeholder.png" alt="profile pic"/>
          <h5>Username Goes Here</h5>
        </div>
        <div className="user-news">
          <h3>Latest News</h3>
        </div>
        <div className="user-animallist">
          <h3>Animal List</h3>
          {showAnimalList}
        </div>
      </div>
    );
  }
}

export default User;
