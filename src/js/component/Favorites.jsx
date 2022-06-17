import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const Favorites = () => {
  const { store, actions } = useContext(Context);
  useEffect
  
  return (
    <>
      <div className="btn-group">
        <button
          className="btn btn-info dropdown-toggle"
          type="button"
          id="dropdownMenuClickableInside"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
          onClick={()=>{
            actions.listarFavorites()

          }}
        >
          FAVORITES
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
          {store.favorites.map((favorite, index) => {
            return (
              <>
                <li key={index}>
                  <a className="dropdown-item" href="#">
                    {favorite.name}
                    <button
                      onClick={() => actions.deleteFavorites(favorite.name)}
                      className="  btn-outline-warning fa fa-trash"
                    ></button>
                  </a>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default Favorites;
