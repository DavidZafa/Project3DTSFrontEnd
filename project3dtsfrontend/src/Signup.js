import React, {Component} from 'react'


class Signup extends React.Component {
constructor () {
super ()
  this.state = {
    email: '',
    password: '',
    passwordConfirm: '',
    valid: true
  }
  this.password = this.password.bind(this)
  this.passwordConfirm = this.passwordConfirm.bind(this)



}
render() {
  return (
    <div className='signup'>
      <h1>Sign Up</h1>

      <input type ="text" placeholder ="email"/>
      <input type="password" placeholder="password"  />
      <input type="password" placeholder = "confirm password"/>
      <input type ="button" value = "Submit"/>
      </div>
  )
}
password(e) {
  this.setState({password: e.target.value})
  e.preventDefault()
}

passwordConfirm(e) {
  this.setState({passwordConfirm: e.target.value})
  e.preventDefault()
}



}
export default Signup;
