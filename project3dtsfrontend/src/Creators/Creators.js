import React from "react";
import "./Creators.css";

const Creators = () => (
  <footer className="footer page-footer container-fluid footer-container">

  <h1>Meet the Developers!</h1>

    <div className="row meet-dev-container">

      <div className="col s12 m6 l4 dev-box">
        <div className="card green meet-dev">
          <div className="card-content white-text">
            <span class="card-title">David</span>
            <img
              className="dev-img" src="https://www.sbp-creative.com/wp-content/uploads/2017/01/profile-placeholder.png"
              alt="david.png"
            />
            <section>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </section>
          </div>
        </div>
        </div>
        <div className="col s12 m6 l4 dev-box">
        <div className="card meet-dev teal">
          <div className="card-content white-text">
            <span class="card-title">Tasha</span>
            <img className="dev-img" 
              src="https://www.sbp-creative.com/wp-content/uploads/2017/01/profile-placeholder.png"
              alt="david.png"
            />
            <section>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </section>
          </div>
        </div>
      </div>
      <div className="col s12 m6 l4 dev-box">
        <div className="card orange meet-dev">
          <div className="card-content white-text">
            <span class="card-title">Stephanie</span>
            <img className="dev-img"
              src="https://www.sbp-creative.com/wp-content/uploads/2017/01/profile-placeholder.png"
              alt="david.png"
            />
            <section>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </section>
          </div>
        </div>
      </div>
      </div>
    <a href="https://github.com/DavidZafa">David</a>
    <a href="https://github.com/tamitchell">Tasha</a>
    <a href="https://github.com/jsc397">Stephanie</a>
  </footer>
);

export default Creators;
