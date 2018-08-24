import React, { Component } from 'react'
import Header from '../Header/Header'
import { Route, Switch } from "react-router-dom"
import axios from 'axios'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Logout from '../Logout/Logout'
import User from '../User/User'
import News from '../News/News'
import Animals from '../Animals/Animals'
import Donate from '../Donate/Donate'
import Signup from '../Signup/Signup'
const userURL = 'http://localhost:3001/user/'
const signupURL = 'http://localhost:3001/user/signup'
const loginURL = 'http://localhost:3001/user/login'
class App extends Component {
  constructor () {
    super();
    this.state = {
      email: '',
      password: '',
      userID: '',
      selectAnimal: '',
      userAnimalList: [],
      isLoggedIn: false
    }
  }

  componentDidMount () {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
  }

  getUser() {
    axios.get(userURL + this.state.userID)
      .then(res => {
        console.log(res)
        this.setState({userID: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleInput = e => {
        const userState = this.state;
        userState[e.target.name] = e.target.value;
        console.log(userState);
        this.setState(userState);
      }

      handleSignUp = e => {
        e.preventDefault();
        axios.post(signupURL, {
            email: this.state.email,
            password: this.state.password
          })
          .then(response => {
            localStorage.token = response.data.token;
            this.setState({
              isLoggedIn: true,
              userID: response.data.payload
            })
          })
          .catch(err => console.log(err));
      };

      handleLogIn = e => {
        e.preventDefault()
        axios.post(loginURL, {
            email: this.state.email,
            password: this.state.password
        })
        .then(res => {
            localStorage.token = res.data.token
            this.setState({
              isLoggedIn: true,
              userID: res.data.payload
            })
            console.log(this.state)
            this.getUser()
        })
        .catch(err => console.log(err))
    }

    handleLogOut() {
      this.setState({
        username: '',
        password: '',
        isLoggedIn: false
      })
      localStorage.clear()
    }

    getAnimal = e => {
      e.preventDefault()
      const animalArr = {}
      animalArr[e.target.name] = e.target.value;
      // let list = Array.from(this.state.selectAnimalArr)
      // list.push(animalArr)
      // this.setState({selectAnimalArr: list})
      console.log(this.state.selectAnimal)
      this.setState({selectAnimal: animalArr})
    
    }
    
    addAnimal = e => {
      e.preventDefault()
      // axios.post('http://localhost:3001/' + this.state.user + '/animal/' + this.state.selectAnimal + '/add')
        axios.post('http://localhost:3001/' + this.state.userID + '/animal/name/add', this.state.selectAnimal)
        .then(res => {
          console.log(res.data)
          this.setState({userAnimalList : res.data})
        })
      
    }
    

  render() {
    const user = this.state.userID
    return (
      <div>


  <Header userID={user.id} isLoggedIn={this.state.isLoggedIn}/>
  <Switch>
  <Route exact path = '/' render={() => {
        return(
          <Home isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut} />
        )
    }}
  />
  <Route exact path = '/login' render = {(props) => {
    return(
    <Login 
    isLoggedIn={this.state.isLoggedIn} 
    handleInput={this.handleInput} 
    handleLogIn = {this.handleLogIn} />
    )
  }}
  />
  <Route path = '/signup' render ={(props) => {
    return(<Signup 
      isLoggedIn = {this.state.isLoggedIn} 
      handleInput = {this.handleInput} 
      handleSignUp={this.handleSignUp}  />
  )
  }}
  />
  <Route path ='/logout' render={() => {
    return(
      <Logout  isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut}/>
    )
  }}/>



  <Route path ={`/user/${user.id}`} render={() => {
    return(
        <User userID={user.id}/>
    )
  }}/>

  <Route path = '/news' component = {News}/>
  <Route path = '/animals' render={() => {
    return(
      <Animals userID={user.id} getAnimal={this.getAnimal} addAnimal={this.addAnimal}/>
    )
  }

  }/>
  <Route path ='/donate' component = {Donate}/>
  </Switch>
</div>


    );
  }
}

export default App;
