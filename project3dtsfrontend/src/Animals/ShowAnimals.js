import React, { Component } from "react";
import "./Animals.css";
class ShowAnimals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: this.props.data,
      selectedAnimal: {}
    };
  }

  render() {
    const animal = this.state.animals;
    return (
      <div>
        <div className="card select-animal-card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={animal.picture} alt={animal.name} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              {animal.name}
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
      </div>
    );
  }
}

export default ShowAnimals;