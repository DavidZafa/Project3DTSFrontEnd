import React, {Component} from 'react'

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
      <div>
      <h1>New Goes Here</h1>
      </div>
    )
  }
}


export default News
