import React from "react";
import "../../../styles/Card.css";

const CardPlanets = (props) => {
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
            <h5 className="card-title">{props.name}</h5>

            <p className="card-text">
              Population: <br />
              Terrain: <br />
            </p>
            <div className="d-grid gap-2 d-md-block ">
              <button type="button" className="btn btn-primary">
                learn more
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

export default CardPlanets;
