import React, { Component } from "react";
import "./Animals.css";
<<<<<<< HEAD

// const addAnimalURL = '/user/:id/animal/name/add'

=======
>>>>>>> 4aeaf93a3e0f344c4626f66a824850c6218649f2
class ShowAnimals extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      animals: this.props.data
=======
      animals: this.props.data,
      selectedAnimal: {}
>>>>>>> 4aeaf93a3e0f344c4626f66a824850c6218649f2
    };
  }

  render() {
    const animal = this.state.animals;
    return (
<<<<<<< HEAD
      <div>
        {/* <div className="row">
                    <div className="col s12 m6">
                    <div className="card animal-card">
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
                </div> */}

        <div className="card select-animal-card">
          <div className="card-image waves-effect waves-block waves-light">
=======
        <div className="card select-animal-card">
          <div className="card-image img-frame waves-effect waves-block waves-light">
>>>>>>> 4aeaf93a3e0f344c4626f66a824850c6218649f2
            <img className="activator" src={animal.picture} alt={animal.name} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              {animal.name}
<<<<<<< HEAD
              <a className="btn-floating halfway-fab waves-effect waves-light red">
                <form>
                  <input
                    type="submit"
                    name="name"
                    defaultValue={animal.name}
                    onClick={this.props.handleDelete}
                  />
                </form>
              </a>
              <i className="material-icons right">more_vert</i>
            </span>
          </div>
          <div className="card-reveal">
            <span>
              {" "}
              <a className="btn-floating halfway-fab waves-effect waves-light red">
                <form>
                  <input
                    type="submit"
                    className="name"
                    defaultValue={animal.name}
                    onClick={this.props.getAnimal}
                  />
                </form>
              </a>
            </span>
=======
              <span>
                <a className="btn-floating halfway-fab waves-effect waves-light red">
                  <form>
                    <input
                      type="submit"
                      name="name"
                      value={animal.name}
                      onClick={e => this.props.getAnimal(e)}
                    />
                  </form>
                </a>
              </span>
            </span>
          </div>
          <div className="card-reveal">
>>>>>>> 4aeaf93a3e0f344c4626f66a824850c6218649f2
            <span className="card-title grey-text text-darken-4">
              {animal.name}
              <i className="material-icons right">close</i>
            </span>

            <p>{animal.species}</p>
            <p>{animal.region}</p>
            <p>{animal.habitat}</p>
            <p>{animal.endangeredLvl}</p>
            <p>{animal.population}</p>
            <div>{animal.about}</div>
          </div>
        </div>
<<<<<<< HEAD
      </div>
=======
>>>>>>> 4aeaf93a3e0f344c4626f66a824850c6218649f2
    );
  }
}

<<<<<<< HEAD
export default ShowAnimals;

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
=======
export default ShowAnimals;
>>>>>>> 4aeaf93a3e0f344c4626f66a824850c6218649f2
