import React, { Component } from "react";
import axios from 'axios'
// /user/:id/animal/name/delete

const deleteUrl = 'http://localhost:3001/story/delete/'
class AnimalList extends Component {
    constructor(props){
        super(props)
        this.state = {
            animal: this.props.data
        }
    }

    // handleDelete = (e) => {
    //     const { name, picture, species, region, habitat, endangeredLvl, population, about } = this.state.animal
    //     //when user auth works
    //     // axios.delete(deleteUrl + this.props.match.params.id, {params: { name, picture, species, region, habitat, endangeredLvl, population, about }})
    //     axios.delete('http://localhost:3001/user/ '+ '5b7ef964fce1931b3fd567c7/' + 'animal/' + {}, {params: { name, picture, species, region, habitat, endangeredLvl, population, about }})

    // }

    render() {
        const animal = this.state.animal
        return(
            <div>
                <h1>{animal.name}</h1>
                <img src={animal.picture} alt={animal.name}/>
                <p>{animal.species}</p>
                <p>{animal.region}</p>
                <p>{animal.habitat}</p>
                <p>{animal.endangeredLvl}</p>
                <p>{animal.population}</p>
                <div>{animal.about}</div>
                

                
                {/* <button type="button" onClick={this.handleDelete}>Remove Animal</button> */}

            </div>
        )
    }
}

export default AnimalList