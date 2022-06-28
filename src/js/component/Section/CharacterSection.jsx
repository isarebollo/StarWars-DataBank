import React, { useEffect, useState, useContext } from "react";
import CardCharacters from "../Cards/CardCharacters.jsx";
import "../../../styles/Card.css";
import api from "../../API/api.js";
import { Context } from "../../store/appContext.js";

const CharacterSection = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    api.getCharacters().then((data) => {
      actions.setCharacters(data.results);
    });
  }, []);

  if (!store.characters || store.characters.length === 0) {
    return (
      <>
        <h1 id="titleCargando"> Cargando Characters...</h1>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <h2 id="titleGeneral">CHARACTERS</h2>
        <div className="scrollmenu">
          <div className="container d-flex">
            {store.characters.map((character, index) => {
              return (
                <div key={index}>
                  <CardCharacters uid={character.uid} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default CharacterSection;
