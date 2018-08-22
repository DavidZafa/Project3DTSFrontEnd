import React, {Component} from 'react'
import './News.css'

class ShowNews extends Component {
    constructor(props) {
        super(props)
        this.state = {
            article: this.props.info
        }
    }
    render() {
        const newsarticle = this.state.article
        return(
                <div>
                    <h1>{newsarticle.title}</h1>
                    <img src={newsarticle.imageUrl} alt=""/>
                    <p>{newsarticle.author}</p>
                    <p>{newsarticle.description}</p>
                    <div>{newsarticle.post}</div>
             </div>
        )
    }
}

export default ShowNews