import React, { useEffect, useState, useContext } from "react";
import "../../../styles/Card.css";
import { Link } from "react-router-dom";
import api from "../../API/api.js";
import { Context } from "../../store/appContext.js";

const CardVehicles = (props) => {
  const [properties, setproperties] = useState({});
  const { store, actions } = useContext(Context);

  useEffect(() => {
    api.getVehiclesUid(props.uid).then((data) => {
      setproperties(data.result.properties);
    });
  }, []);

  return (
    <>
      <div className="container ">
        <div className="card">
          <img
            src="https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/480/public/media/image/2015/12/492533-halcon-milenario.jpg?itok=w980sfit"
            className="img-thumbnail"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">{props.uid}-{properties.name}</h5>

            <p className="card-text">
            manufacturer: {properties.manufacturer}
              <br />
            model: {properties.model}
              
            </p>
            <div className="d-grid gap-2 d-md-block ">
            <button
                onClick={() => {
                  actions.setVehicleProperties(properties);
                }}
                type="button"
                className="btn btn-warning "
              >
                <Link to="/vehicle"> Info</Link>
              </button>

              <button onClick={() => {
                  actions.saveFavorite(properties.name);
                }} type="button" className="btn btn-outline-warning ms-5">
                <i className="fa fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardVehicles;
