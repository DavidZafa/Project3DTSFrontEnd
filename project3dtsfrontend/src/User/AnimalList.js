import React, { Component } from "react";

class AnimalList extends Component {
    constructor(props){
        super(props)
        this.state = {
            animal: this.props.data
        }
    }

    render() {
        const animal = this.state.animal
        return(
            <div>
                <h1>{animal.name}</h1>
                <img src={animal.picture} alt=""/>
                <p>{animal.species}</p>
                <p>{animal.region}</p>
                <p>{animal.habitat}</p>
                <p>{animal.endangeredLvl}</p>
                <p>{animal.population}</p>
                <div>{animal.about}</div>

            </div>
        )
    }
}

export default AnimalList