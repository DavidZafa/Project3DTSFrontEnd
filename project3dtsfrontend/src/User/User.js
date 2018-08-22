import React, {Component} from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class User extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount() {

    }

    render(){
        return (
            <div>
                <div className="user-box">
                <img src='http://sg-fs.com/wp-content/uploads/2017/08/user-placeholder.png'/>
                <h5>Username Goes Here</h5>
                </div>
                <div className="user-news">
                    <h3>Latest News</h3>
                    <ul className="article-container">
                        <li className="article-item">Article Item</li>
                    </ul>
                </div>
                <div className="user-animallist">
                    <h3>Animal List</h3>
                    <ul className="animal-collapsible">
                        <li className="collapsible-item">Animal Item</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default User