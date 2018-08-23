import React, { Component } from "react";
import axios from 'axios'
class AnimalList extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: this.props
        }
    }

    handleDelete = (e) => {
        const { name, picture, species, region, habitat, endangeredLvl, population, about } = this.state.animal
        // axios.delete('')
    }

    render() {
        // const animal = this.state.animal
        return(
            <div>
                {/* <h1>{animal.name}</h1>
                <img src={animal.picture} alt={animal.name}/>
                <p>{animal.species}</p>
                <p>{animal.region}</p>
                <p>{animal.habitat}</p>
                <p>{animal.endangeredLvl}</p>
                <p>{animal.population}</p>
                <div>{animal.about}</div>
                

                
                <button type="button" onClick={this.handleDelete}>Remove Animal</button> */}

            </div>
        )
    }
}

export default AnimalList