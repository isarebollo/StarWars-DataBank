import React, { useEffect, useState } from "react";
import CardCharacters from "../Cards/CardCharacters.jsx";
import "../../../styles/Card.css";
import api from "../../API/api.js";


const CharacterSection = () => {
  const [characters, setcharacters] = useState([]);
  
  useEffect(() => {
    // api.getCharacters().then((data) => {
    //   setcharacters(data.results);
     
    // });
    setcharacters([
      {
        "uid": "1",
        "name": "Luke Skywalker",
        "url": "https://www.swapi.tech/api/people/1"
      },
      {
        "uid": "2",
        "name": "C-3PO",
        "url": "https://www.swapi.tech/api/people/2"
      },
      {
        "uid": "3",
        "name": "R2-D2",
        "url": "https://www.swapi.tech/api/people/3"
      },
      {
        "uid": "4",
        "name": "Darth Vader",
        "url": "https://www.swapi.tech/api/people/4"
      },
      {
        "uid": "5",
        "name": "Leia Organa",
        "url": "https://www.swapi.tech/api/people/5"
      },
      {
        "uid": "6",
        "name": "Owen Lars",
        "url": "https://www.swapi.tech/api/people/6"
      },
      {
        "uid": "7",
        "name": "Beru Whitesun lars",
        "url": "https://www.swapi.tech/api/people/7"
      },
      {
        "uid": "8",
        "name": "R5-D4",
        "url": "https://www.swapi.tech/api/people/8"
      },
      {
        "uid": "9",
        "name": "Biggs Darklighter",
        "url": "https://www.swapi.tech/api/people/9"
      },
      {
        "uid": "10",
        "name": "Obi-Wan Kenobi",
        "url": "https://www.swapi.tech/api/people/10"
      }
    ])
  }, [setcharacters]);

  return (
    <>
      <div className="container">
        <div className="scrollmenu">
          <h2> CHARACTERS</h2>
          <div className="container d-flex">
            {characters.map((character,index) => {
              return (
                <div key={index}>
                  <CardCharacters
                    url={character.url}
                   
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default CharacterSection;
