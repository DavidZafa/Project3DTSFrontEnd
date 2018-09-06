import React, { Component } from "react";
import './User.css'

class AnimalList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animal: this.props.data
    };
  }

  render() {
    const animal = this.state.animal;
    return (
        <div className="card">
          <div className="card-image img-frame waves-effect waves-block waves-light">
            <img className="activator" src={animal.picture} alt={animal.name} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              {animal.name}
              <a className="btn-floating halfway-fab waves-effect waves-light red">
                <form onSubmit={this.props.handleDelete}>
                  <input type="submit" name="name" value={animal.name} />
                </form>
              </a>
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
    );
  }
}

export default AnimalList;
