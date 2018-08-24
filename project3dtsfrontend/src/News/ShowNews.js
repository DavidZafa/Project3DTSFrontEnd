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
                <ul className="collapsible">
                    <li>
                        <div class="collapsible-header">
                        <h4>{newsarticle.title}</h4>
                        <img src={newsarticle.imageUrl} alt={newsarticle.title}/>
                        <p>{newsarticle.author}</p>
                        <p>{newsarticle.description}</p>

                        </div>
                        <div class="collapsible-body">{newsarticle.post}</div>
                        </li>    
                </ul>
        )
    }
}

export default ShowNews