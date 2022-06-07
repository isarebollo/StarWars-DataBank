import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-light bg-light mb-3">
          <Link to="/">
            <span className="navbar-brand mb-0 h1">
              <img
                src="https://i.pinimg.com/originals/06/b2/c4/06b2c4e587960d952004be90c96a3170.jpg"
                className="img-thumbnail"
                alt="..."
                width="100"
              ></img>
            </span>
          </Link>
          <div className="ml-auto">
            <Link to="/demo">
              <button className="btn btn-primary btn-lg">Favorites</button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};
