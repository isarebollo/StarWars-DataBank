import React, { useEffect, useState } from "react";
import CardPlanets from "../Cards/CardPlanets.jsx";
import "../../../styles/Card.css";
import api from "../../API/api.js";


const PlanetsSection = () => {
  const [planets, setPlanets] = useState([]);
  
  useEffect(() => {
    // api.getPlanets().then((data) => {
    //   setPlanets(data.result);
    // });
    setPlanets([
      {
        "uid": "1",
        "name": "Tatooine",
        "url": "https://www.swapi.tech/api/planets/1"
      },
      {
        "uid": "2",
        "name": "Alderaan",
        "url": "https://www.swapi.tech/api/planets/2"
      },
      {
        "uid": "3",
        "name": "Yavin IV",
        "url": "https://www.swapi.tech/api/planets/3"
      },
      {
        "uid": "4",
        "name": "Hoth",
        "url": "https://www.swapi.tech/api/planets/4"
      },
      {
        "uid": "5",
        "name": "Dagobah",
        "url": "https://www.swapi.tech/api/planets/5"
      },
      {
        "uid": "6",
        "name": "Bespin",
        "url": "https://www.swapi.tech/api/planets/6"
      },
      {
        "uid": "7",
        "name": "Endor",
        "url": "https://www.swapi.tech/api/planets/7"
      },
      {
        "uid": "8",
        "name": "Naboo",
        "url": "https://www.swapi.tech/api/planets/8"
      },
      {
        "uid": "9",
        "name": "Coruscant",
        "url": "https://www.swapi.tech/api/planets/9"
      },
      {
        "uid": "10",
        "name": "Kamino",
        "url": "https://www.swapi.tech/api/planets/10"
      }
    ]);
  }, [setPlanets]);
  return (
    <>
      <div className="container">
        <div className="scrollmenu">
          <h2> PLANETS</h2>
          <div className="container d-flex">
            {planets.map((planet, index) => {
              return (
                <div key={index}>
                  <CardPlanets name={planet.name} url={planet.url} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default PlanetsSection;
