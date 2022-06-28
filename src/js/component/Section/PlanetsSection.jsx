import React, { useEffect, useState, useContext } from "react";
import CardPlanets from "../Cards/CardPlanets.jsx";
import "../../../styles/Card.css";
import api from "../../API/api.js";
import { Context } from "../../store/appContext.js";

const PlanetsSection = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    api.getPlanets().then((data) => {
      actions.setPlanets(data.results);
    });
  }, []);

  if (!store.planets || store.planets.length === 0) {
    return (
      <>
        <h1 id="titleCargando"> Cargando Planets...</h1>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <h2 id="titleGeneral"> PLANETS</h2>
        <div className="scrollmenu">
          <div className="container d-flex">
            {store.planets.map((planet, index) => {
              return (
                <div key={index}>
                  <CardPlanets uid={planet.uid} />
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
