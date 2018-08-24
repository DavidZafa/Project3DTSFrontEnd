import React, {Component} from 'react'
import axios from 'axios'
import './Animals.css'
const addAnimalURL = '/user/:id/animal/name/add'


class ShowAnimals extends Component {
    constructor(props) {
        super(props)
        this.state = {
            animals: this.props.data,
            user: this.props.userID,
            selectAnimalArr: []
        }
    }

    addAnimal = e => {
        e.preventDefault()
        axios.post('http://localhost:3001/' + this.state.user + '/animal/' + 'name' + '/add')

    }


    render() {
        const animal = this.state.animals
        return(
                <div>
                  <div className="row">
                    <div className="col s12 m6">
                    <div className="card">
                        <div className="card-image">
                        <img src={animal.picture} alt={animal.name}/>
                        <span className="card-title">{animal.name}</span>
                        <a className="btn-floating halfway-fab waves-effect waves-light red">
                        <form>
                            <input type="submit" value={animal.name} onClick={this.addAnimal}/>
                        </form>
                        </a>
                        </div>
                        <div className="card-content">
                        <p>{animal.species}</p>
                    <p>{animal.region}</p>
                    <p>{animal.habitat}</p>
                    <p>{animal.endangeredLvl}</p>
                    <p>{animal.population}</p>
                    <p>{animal.about}</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        )
    }
}

export default ShowAnimals