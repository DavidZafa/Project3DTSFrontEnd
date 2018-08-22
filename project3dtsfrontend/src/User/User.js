import React, { Component } from "react";
import axios from "axios";
import AnimalList from "../User/AnimalList";
import ShowNews from '../News/ShowNews'
// import {
//   Card,
//   CardActions,
//   CardHeader,
//   CardMedia,
//   CardTitle,
//   CardText
// } from "material-ui/Card";

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
      .get(url + "5b7d60c42fa6870605b3f9b7")
      .then(res => {
        this.setState({
          user: res.data,
          news: []
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let showAnimalList
    if (this.state.user.animalList != undefined) {
      showAnimalList = this.state.user.animalList.map(animal => {
        return (
          <div key={animal._id}>
            <AnimalList data={animal} />
          </div>
        );
      });
    } else {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="user-box">
          <img src="http://sg-fs.com/wp-content/uploads/2017/08/user-placeholder.png" />
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
