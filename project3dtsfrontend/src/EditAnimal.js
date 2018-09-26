// import React, { Component } from "react";
// import axios from "axios";
//
// class EditAnimal extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//     species: "",
//     picture: "",
//     region: "",
//     habitat: "",
//     endangeredLvl: "",
//     population: "",
//     about: ""
//     };
//   }
//
//   onChange = e => {
//     const state = this.state;
//     state[e.target.name] = e.target.value;
//     this.setState(state);
//   };
//
//   onSubmit = e => {
//     console.log("submit clicked");
//     let data = JSON.stringify({
//       name: this.state.name,
//     species: this.state.species,
//     picture: this.state.picture,
//     region: this.state.region,
//     habitat: this.state.habitat,
//     endangeredLvl: this.state.endangeredLvl,
//     population: this.state.population,
//     about: this.state.about
//     });
//     axios.put(
//       `https://localhost:3001/animal/update/${this._id}`,
//       data,
//       {
//         headers: {
//           "Content-Type": "application/json"
//         }
//       }
//     );
//   };
//
//   render() {
//     const { name, species, picture, region, habitat, endangeredLvl, population, about  } = this.state;
//     return (
//       <div>
//         <h1>Edit Animal</h1>
//         <form onSubmit={this.onSubmit}>
//           <div>
//             <label for="name">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.onChange}
//               placeholder="Name"
//             />
//           </div>
//           <div>
//             <label for="picture">Img Url</label>
//             <input
//               type="text"
//               name="picture"
//               value={picture}
//               onChange={this.onChange}
//               placeholder="https://i.imgur.com/example.png"
//             />
//           </div>
//           <div>
//             <label for="species">Species</label>
//             <input
//               type="text"
//               name="species"
//               value={species}
//               onChange={this.onChange}
//               placeholder="species"
//             />
//           </div>
//           <div>
//             <label for="region">Region</label>
//             <input
//               type="text"
//               name="species"
//               value={species}
//               onChange={this.onChange}
//               placeholder="Species"
//             />
//           </div>
//           <div>
//             <label for="habitat">Habitat</label>
//             <input
//               type="text"
//               name="habitat"
//               value={habitat}
//               onChange={this.onChange}
//               placeholder="Habitat"
//             />
//           </div>
//           <div>
//             <label for="endangeredLvl">Endangered Level</label>
//             <input
//               type="text"
//               name="endangeredLvl"
//               value={endangeredLvl}
//               onChange={this.onChange}
//               placeholder="1-10"
//             />
//           </div>
//           <div>
//             <label for="population">Population</label>
//             <input
//               type="text"
//               name="population"
//               value={population}
//               onChange={this.onChange}
//               placeholder="Population"
//             />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }
//
// export default EditAnimal;
