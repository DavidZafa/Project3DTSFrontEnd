// import React, { Component } from "react";
// import axios from "axios";
//
// class AddAnimal extends Component {
//   constructor() {
//     super();
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
//     axios.post("https://localhost:3001/addanimal", data, {
//       headers: {
//         "Content-Type": "application/json"
//       }
//     });
//   };
//
//     render() {
//     const { name, species, picture, region, habitat, endangeredLvl, population, about } = this.state;
//
//     return (
//       <div className="form">
//         <h1>Add Animal</h1>
//         <form onSubmit={this.onSubmit}>
//           <div>
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.onChange}
//               placeholder="Name"
//             />
//           </div>
//           <div>
//             <label htmlFor="picture">Img Url</label>
//             <input
//               type="text"
//               name="picture"
//               value={picture}
//               onChange={this.onChange}
//               placeholder="https://i.imgur.com/example.png"
//             />
//           </div>
//           <div>
//             <label htmlFor="species">Species</label>
//             <input
//               type="text"
//               name="species"
//               value={species}
//               onChange={this.onChange}
//               placeholder="Species"
//             />
//           </div>
//           <div>
//             <label htmlFor="region">Region</label>
//             <input
//               type="text"
//               name="region"
//               value={region}
//               onChange={this.onChange}
//               placeholder="Region"
//             />
//           </div>
//           <div>
//             <label htmlFor="habitat">Habitat</label>
//             <input
//               type="text"
//               name="habitat"
//               value={habitat}
//               onChange={this.onChange}
//               placeholder="Habitat"
//             />
//           </div>
//           <div>
//             <label htmlFor="endangeredLvl">Endangered Level</label>
//             <input
//               type="text"
//               name="endangeredLvl"
//               value={endangeredLvl}
//               onChange={this.onChange}
//               placeholder="1-10"
//             />
//           </div>
//           <label htmlFor="population">Population</label>
//           <input
//             name="population"
//             value={population}
//             onChange={this.onChange}
//             className="population"
//
//           />
//           <br/>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     )
//   }
// }
//
// export default AddAnimal;
