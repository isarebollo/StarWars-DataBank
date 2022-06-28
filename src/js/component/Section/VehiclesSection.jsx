import React, { useEffect, useState, useContext } from "react";
import CardVehicles from "../Cards/CardVehicles.jsx";
import "../../../styles/Card.css";
import api from "../../API/api.js";
import { Context } from "../../store/appContext.js";

const VehiclesSection = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    api.getVehicles().then((data) => {
      actions.setVehicles(data.results);
    });
  }, []);

  if (!store.vehicles || store.vehicles.length === 0) {
    return (
      <>
        <h1 id="titleCargando"> Cargando Vechicles...</h1>
      </>
    );
  }
  return (
    <>
      <div className="container">
        <h2 id="titleGeneral"> VEHICLES</h2>
        <div className="scrollmenu">
          <div className="container d-flex">
            {store.vehicles.map((vehicles, index) => {
              return (
                <div key={index}>
                  <CardVehicles uid={vehicles.uid} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default VehiclesSection;
