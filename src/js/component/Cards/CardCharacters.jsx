import React, { useEffect, useState, useContext } from "react";
import "../../../styles/Card.css";
import { Link } from "react-router-dom";
import api from "../../API/api.js";
import { Context } from "../../store/appContext.js";
import DarthVader from "../../../img/ImagenCharacteres/LukeSkywalker.png";// PREGUNTAR COMO IMPORTAR LAS IMAGENES PARA PONERLAS DINAMICAMENTE. 


const CardCharacters = (props) => {
  const [properties, setproperties] = useState({});
  const {store, actions}=useContext(Context);

  useEffect(() => {
    api.getCharacterUid(props.uid).then((data) => {
      setproperties(data.result.properties);
    });
  }, []);

  return (
    <>
      <div className="container ">
        <div className="card">
          <img
            src= {DarthVader}
          ></img>
          <div className="card-body">
            <h5 className="card-title">{props.uid}-{properties.name}</h5>

            <p className="card-text">
              Gender: {properties.gender}
              <br />
              Hair-Color: {properties.hair_color}
              <br />
              Eye-color: {properties.eye_color}
            </p>
            <div className="d-grid gap-2 d-md-block ">
              <button onClick={()=>{
                actions.setCharacterProperties(properties)
              }} type="button" className="btn btn-warning ">
                <Link to="/Bio"> Info</Link>
              </button>

              <button type="button" className="btn btn-outline-warning ms-5">
                <i className="fa fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCharacters;
