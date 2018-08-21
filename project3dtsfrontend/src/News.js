import React, {Component} from 'react'
import './News.css'
class News extends Component {
  constructor(){
    super()
    this.state = {
      title: "",
      imageURL: "",
      author: "",
      description: "",
      post: ""
    }
  }

  render(){
    return(
      <div className = "news">
      <h1>New Goes Here</h1>
      <h2>And Here</h2>
      </div>
    )
  }
}


export default News
