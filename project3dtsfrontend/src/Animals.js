import React, {Component} from 'react'


class Animals extends Component {
  constructor(props){
    super(props)
    this.state = {
      animal:"Beluga Whale",
      image: "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4NC84NjEvb3JpZ2luYWwvYmVsdWdhLXdoYWxlLmpwZw=="
    }
  }

render () {
  return (
    <div>
    <h1>{this.state.animal}</h1>
      <img src = {this.state.image}/>
    </div>
  )
}


}


export default Animals
