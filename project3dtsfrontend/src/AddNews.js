// import React, { Component } from "react";
// import axios from "axios";
//
// class AddNews extends Component {
//   constructor() {
//     super();
//     this.state = {
//       title: "",
//       imageUrl: "",
//       author: "",
//       description: ""
//       }
//   }
//   onChange = e => {
//     const state = this.state;
//     state[e.target.name] = e.target.value;
//     this.setState(state);
//   };
//
//   onSubmit = e => {
//     console.log("submit clicked");
//     let data = JSON.stringify({
//       title: this.state.title,
//       imageUrl: this.state.imageUrl,
//       author: this.state.author,
//       description: this.state.description
//     });
//     axios.post("https://localhost:3001/news/new", data, {
//       headers: {
//         "Content-Type": "application/json"
//       }
//     });
//   };
//
//   render() {
//     const { title, imageUrl, author, description } = this.state;
//     return (
//       <div className="form">
//         <h1>Add News Articla</h1>
//         <form onSubmit={this.onSubmit}>
//           <div>
//             <label htmlFor="title">Title</label>
//             <input
//               type="text"
//               name="title"
//               value={title}
//               onChange={this.onChange}
//               placeholder="Title"
//             />
//           </div>
//           <div>
//             <label htmlFor="author">Author</label>
//             <input
//               type="text"
//               name="author"
//               value={author}
//               onChange={this.onChange}
//               placeholder="Author"
//             />
//           </div>
//           <div>
//             <label htmlFor="description">Description</label>
//             <input
//               type="text"
//               name="description"
//               value={description}
//               onChange={this.onChange}
//               placeholder="Description"
//             />
//           </div>
//           <button className="waves-effect waves-light btn-large #d32f2f red darken-2" type="submit">Submit</button>
//         </form>{" "}
//       </div>
//     );
//   }
// }
//
// export default AddNews;
