import React, {Component} from 'react'
import './Animals.css'
// const addAnimalURL = '/user/:id/animal/name/add'


class ShowAnimals extends Component {
    constructor(props) {
        super(props)
        this.state = {
            animals: this.props.data,
            }
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
                        <input type="submit" name="name" defaultValue={animal.name} onClick={this.props.getAnimal}/>
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


   //idea one:
    //one function gets name as value and sets it's state
    //other function takes that state and and passes it 
    //through the parameters as a post request
    //thereby adding it to the users' animalList

    //idea two:
    //if we could send an array through the url
    //separated by commas 
    //that may elimate some issues of the user having to worry about repeat clicks
    //we could check the selectAnimalArr for duplicates ahead of time in react
    //and warn the user if they selected the same animal twice
    //the foreseeable caveat is that this will make the url even uglier
    //and that there is probably already a more efficient way to do this
    //for now, we must explicity warn the user to only choose one
    //animal at a time

    // getAnimal = e => {
    //     e.preventDefault()
    //     const animalArr = this.state.selectAnimalArr;
    //     animalArr[e.target.name] = e.target.value;
    //     console.log(animalArr);
    //     let joined = this.state.selectAnimalArr.concat(animalArr)
    //     this.setState({selectAnimalArr: joined})
      
    //   }

    // getAnimal = e => {
    //     e.preventDefault()
    //     const animalArr = this.state.selectAnimalArr;
    //     animalArr[e.target.name] = e.target.value;
    //     console.log(animalArr);
    //     this.setState({selectAnimalArr : animalArr})

    // }

    // addAnimal = e => {
    //     e.preventDefault()
    //     axios.post('http://localhost:3001/' + this.state.user + '/animal/' + this.state.selectAnimal + '/add')

    // }