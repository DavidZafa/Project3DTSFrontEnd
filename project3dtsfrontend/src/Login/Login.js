import React, {Component} from 'react'

class Login extends Component(){
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

render () {
  return (
    <div className = 'form'>
    <h1>Sign In</h1>

    <input type ="text" placeholder ="email"/>
      <input type="password" placeholder="password" />
  )
}
}

export default Login
