import React, { useEffect, useState } from "react";
import CardVehicles from "../Cards/CardVehicles.jsx";
import "../../../styles/Card.css";
import api from "../../API/api.js";
const VehiclesSection = () => {
  const [vehicles, setVehicles] = useState([]);
  
  useEffect(() => {
    // api.getVehicles().then((data) => {
    //   setVehicles(data.result);
    // });
    setVehicles([
      {
        "uid": "4",
        "name": "Sand Crawler",
        "url": "https://www.swapi.tech/api/vehicles/4"
      },
      {
        "uid": "7",
        "name": "X-34 landspeeder",
        "url": "https://www.swapi.tech/api/vehicles/7"
      },
      {
        "uid": "6",
        "name": "T-16 skyhopper",
        "url": "https://www.swapi.tech/api/vehicles/6"
      },
      {
        "uid": "8",
        "name": "TIE/LN starfighter",
        "url": "https://www.swapi.tech/api/vehicles/8"
      },
      {
        "uid": "14",
        "name": "Snowspeeder",
        "url": "https://www.swapi.tech/api/vehicles/14"
      },
      {
        "uid": "18",
        "name": "AT-AT",
        "url": "https://www.swapi.tech/api/vehicles/18"
      },
      {
        "uid": "16",
        "name": "TIE bomber",
        "url": "https://www.swapi.tech/api/vehicles/16"
      },
      {
        "uid": "19",
        "name": "AT-ST",
        "url": "https://www.swapi.tech/api/vehicles/19"
      },
      {
        "uid": "20",
        "name": "Storm IV Twin-Pod cloud car",
        "url": "https://www.swapi.tech/api/vehicles/20"
      },
      {
        "uid": "24",
        "name": "Sail barge",
        "url": "https://www.swapi.tech/api/vehicles/24"
      }
    ]);
  }, [setVehicles]);

  return (
    <>
      <div className="container">
        <div className="scrollmenu">
          <h2> VEHICLES</h2>
          <div className="container d-flex">
            {vehicles.map((vehicles,index) => {
              return (
                <div key={index} >
                  <CardVehicles name={vehicles.name} url={vehicles.url} />
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
