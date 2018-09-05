import React, {Component} from 'react'
import './News.css'
import axios from 'axios'
import ShowNews from '../News/ShowNews'

const url = 'https://dangerzone1.herokuapp.com/news'
class News extends Component {
  constructor(){
    super()
    this.state = {
      articles: []
    }
  }

  componentDidMount(){
      axios.get(url)
        .then(res => {
          this.setState({
            articles: res.data
          })
        })
        .catch(err => console.log(err))
  }

  render(){

    let showNews = this.state.articles.map(article => {
      return(
        <div key={article._id}>
          <ShowNews info={article}/>
        </div>
      )
    })
    return(
      <div className = "news">
        {showNews}
      </div>
    )
  }
}


export default News
