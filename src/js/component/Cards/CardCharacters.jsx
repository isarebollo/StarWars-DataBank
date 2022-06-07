import React, { useEffect, useState } from "react";
import "../../../styles/Card.css";
import { Link } from "react-router-dom";
import api from "../../API/api.js";

const CardCharacters = (props) => {
  const [properties, setproperties] = useState({});
  
  useEffect(() => {
    api.Get(props.url).then((data) => {
      setproperties(data.result.properties);
     
    });
  }, [setproperties]);
  
  return (
    <>
      <div className="container ">
        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png"
            className="img-thumbnail"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">
              {properties.name}
            </h5>

            <p className="card-text">
              Gender: {properties.gender}
              <br />
              Hair-Color: {properties.hair_color}
              <br />
              Eye-color: {properties.eye_color}
            </p>
            <div className="d-grid gap-2 d-md-block ">
              <button type="button" className="btn btn-primary">
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
