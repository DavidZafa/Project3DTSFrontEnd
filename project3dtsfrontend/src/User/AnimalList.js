import React, { Component } from "react";
// import axios from 'axios'
class AnimalList extends Component {
    constructor(props){
        super(props)
        this.state = {
            animal: this.props.data
        }
    }

    handleDelete = (e) => {
        // const { name, picture, species, region, habitat, endangeredLvl, population, about } = this.state.animal
        // axios.delete('')
    }

    render() {
        const animal = this.state.animal
        return(
            <div>

                 {/* <div class="row">
                    <div class="col s12 m7">
                         <div class="card">
                            <div class="card-image">
                                <img src={animal.picture} alt={animal.name}/>
                                    <span class="card-title">{animal.name}</span>
                             </div>
                                <div class="card-content">
                                    <p>{animal.species}</p>
                                    <p>{animal.region}</p>
                                    <p>{animal.habitat}</p>
                                    <p>{animal.endangeredLvl}</p>
                                    <p>{animal.population}</p>
                                    <div>{animal.about}</div>
                                </div>
                                <div class="card-action">
                                <button type="button" className="btn" onClick={this.handleDelete}>Remove Animal</button>
                                </div>
                            </div>
                            </div>
                        </div> */}

                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={animal.picture} alt={animal.name}/>
                            </div>
                            <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">{animal.name}<i class="material-icons right">more_vert</i></span>
                            <p><a href="#">This is a link</a></p>
                            </div>
                            <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">{animal.name}<i class="material-icons right">close</i></span>
                                    <p>{animal.species}</p>
                                    <p>{animal.region}</p>
                                    <p>{animal.habitat}</p>
                                    <p>{animal.endangeredLvl}</p>
                                    <p>{animal.population}</p>
                                    <div>{animal.about}</div>                            
                                    </div>
                        </div>
            </div>
        )
    }
}

export default AnimalList