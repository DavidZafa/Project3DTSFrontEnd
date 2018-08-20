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
    <div className='form'>
      <h1>Sign Up</h1>

      <input type ="text" placeholder ="email"/>
      <input type="password" placeholder="password" value = {this.state.password} onChange ={this.password} />
      <input type="password" placeholder = "confirm password" value = {this.state.confirmPassword} onChange = {this.passwordConfirm}/>
      <input type ="button" value = "Submit"  input onClick = {this.passwordCheck}/>
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
