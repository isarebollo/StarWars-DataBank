import React from "react";
import { Link } from "react-router-dom";
import Favorites from "./Favorites.jsx";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light ">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img
              src="https://graffica.info/wp-content/uploads/2016/08/logo-actual-star-wars.jpg"
              className="img-thumbnail-1"
              alt="..."
            ></img>
          </span>
        </Link>
        <div id="textNavbar">
         <h3 > Hace mucho tiempo en una galaxia muy, muy lejana...</h3> 
        </div>

        <div id="buttonFav" className=" badge ml-auto">
          <Favorites />
        </div>
      </nav>
    </>
  );
};
