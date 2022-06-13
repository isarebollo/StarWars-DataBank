import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const Favorites = () => {
  const { store, actions } = useContext(Context);

  let listarFav = () => {

    
  };

  let eliminarFav = () => {};

  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-danger dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#">
              NAME
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Favorites;
