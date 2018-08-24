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
      user: {}
    };
  }

  componentDidMount() {
    //use this when signup/login works
    // axios.get(url + this.props.match.params.id)
    axios
      .get(url + "5b7f40390869af42e15a33d3")
      .then(res => {
        console.log(res.data)
        this.setState({
          user: res.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let animal = this.state.user.animalList
    let showAnimalList

    if (animal === undefined) {
      showAnimalList = <div><h1>You Are Not Logged In</h1></div>;
    } 
     else if (animal.length === 0) {
      showAnimalList = 
      (<div>
        <h5>No animals to track</h5>
        <Link to="/animals">Add Some</Link>
        </div>)
    } 
    else if (animal !== undefined) {
      showAnimalList = this.state.user.animalList.map(animal => {
        return (
          <div key={animal._id}>
            <AnimalList data={animal} />
          </div>
        );
      });
    } else {
      return <div>
        <p>System Failure</p>
        <Link to="/login">logging in</Link>
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
