import React, { useEffect, useState, useContext } from "react";
import "../../../styles/Card.css";
import { Link } from "react-router-dom";
import api from "../../API/api.js";
import { Context } from "../../store/appContext.js";

const CardPlanets = (props) => {
  const [properties, setproperties] = useState({});
  const { store, actions } = useContext(Context);

  useEffect(() => {
    api.getPlanetUid(props.uid).then((data) => {
      setproperties(data.result.properties);
    });
  }, []);

  return (
    <>
      <div className="container ">
        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/ca/7/7f/Tatooine.jpg"
            className="img-thumbnail"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">
              {props.uid}-{properties.name}
            </h5>

            <p className="card-text">
              Population:{properties.population} <br />
              Terrain:{properties.terrain} <br />
            </p>
            <div className="d-grid gap-2 d-md-block ">
            <button
                onClick={() => {
                  actions.setPlanetProperties(properties);
                }}
                type="button"
                className="btn btn-warning "
              >
                <Link to="/planet"> Info</Link>  {/* RUTA A PLANETS */}
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

export default CardPlanets;
