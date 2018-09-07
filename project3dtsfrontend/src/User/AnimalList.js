import React, { Component } from "react";
import './User.css'
const userURL = "http://localhost:3001/user/";


class AnimalList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      animal: this.props.data
    };
  }

  render() {
    const animal = this.state.animal;
    let deletePath = userURL + this.state.user + "/animal/name/delete"
    return (
        <div className="card">
          <div className="card-image img-frame waves-effect waves-block waves-light">
            <img className="activator" src={animal.picture} alt={animal.name} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              {animal.name}
              <a className="btn-floating halfway-fab waves-effect waves-light red">
                {/* <form action={deletePath} method="POST" onSubmit={this.props.handleDelete}> */}
                  <input type="submit" name="name" value={animal.name}/>
                {/* </form> */}
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
