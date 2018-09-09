import React, { Component } from "react";
import Header from "../Header/Header";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import User from "../User/User";
import News from "../News/News";
import Animals from "../Animals/Animals";
import Donate from "../Donate/Donate";
import Signup from "../Signup/Signup";
import "../App/App.css";
const userURL = "http://localhost:3001/user/";
const signupURL = "http://localhost:3001/user/signup";
const loginURL = "http://localhost:3001/user/login";
class App extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      userID: "",
      selectAnimal: {},
      userAnimalList: [],
      isLoggedIn: false
    };
  }

  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      });
    } else {
      this.setState({
        isLoggedIn: false
      });
    }
  }

  getUser() {
    axios
      .get(userURL + this.state.userID)
      .then(res => {
        let userID = res.data._id;
        let userAnimalList = res.data.animalList;
        this.setState({
          userID: userID,
          userAnimalList: userAnimalList
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleInput = e => {
    const userState = this.state;
    userState[e.target.name] = e.target.value;
    this.setState(userState);
  };

  handleSignUp = e => {
    e.preventDefault();
    axios
      .post(signupURL, {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({
          isLoggedIn: true,
          userID: response.data.payload
        });
      })
      .catch(err => console.log(err));
  };

  handleLogIn = e => {
    e.preventDefault();
    axios
      .post(loginURL, {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        localStorage.token = res.data.token;
        this.setState({
          isLoggedIn: true,
          userID: res.data.payload.id
        });
        this.getUser();
      })
      .catch(err => console.log(err));
  };

  handleLogOut() {
    this.setState({
      username: "",
      password: "",
      isLoggedIn: false
    });
    localStorage.clear();
  }

  getAnimal = e => {
    e.preventDefault();
    let animalObj = this.state.selectAnimal;
    animalObj[e.target.name] = e.target.value;
    this.setState({ selectAnimal: animalObj });

    let url = userURL + this.state.userID + "/animal/name/add";
    let { name } = this.state.selectAnimal;
    axios.post(url, { name }).catch(err => console.log(err));
  };

  handleDelete = e => {
    e.preventDefault();
    let animalObj = this.state.selectAnimal;
    animalObj[e.target.name] = e.target.value;
    this.setState({ selectAnimal: animalObj });
    console.log(this.state.selectAnimal)
    let url = userURL + this.state.userID + "/animal/name/delete";
    let { name } = this.state.selectAnimal;
    axios({method: 'delete', url: url, data: { name }}).catch(err => console.log(err));
  };

  render() {
    const user = this.state.userID;
    return (
      <div>
        <Header userID={user} isLoggedIn={this.state.isLoggedIn} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <Home
                  isLoggedIn={this.state.isLoggedIn}
                  handleLogOut={this.handleLogOut}
                />
              );
            }}
          />
          <Route
            exact
            path="/login"
            render={() => {
              return (
                <Login
                  isLoggedIn={this.state.isLoggedIn}
                  handleInput={this.handleInput}
                  handleLogIn={this.handleLogIn}
                />
              );
            }}
          />
          <Route
            path="/signup"
            render={() => {
              return (
                <Signup
                  isLoggedIn={this.state.isLoggedIn}
                  handleInput={this.handleInput}
                  handleSignUp={this.handleSignUp}
                />
              );
            }}
          />
          <Route
            path="/logout"
            render={() => {
              return (
                <Logout
                  isLoggedIn={this.state.isLoggedIn}
                  email={this.state.email}
                  password={this.state.password}
                  userID={this.state.userID}
                />
              );
            }}
          />

          <Route
            path={`/user/${user}`}
            render={() => {
              return (
                <User
                  handleDelete={this.handleDelete}
                  getAnimal={this.getAnimal}
                  userID={user}
                  userAnimalList={this.state.userAnimalList}
                />
              );
            }}
          />

          <Route path="/news" component={News} />
          <Route
            path="/animals"
            render={() => {
              return (
                <Animals
                  userID={user}
                  getAnimal={this.getAnimal}
                  addAnimal={this.addAnimal}
                />
              );
            }}
          />
          <Route path="/donate" component={Donate} />
        </Switch>
      </div>
    );
  }
}

export default App;
