import React from "react";
import "../../../styles/Card.css";

const CardVehicles = (props) => {
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
            <h5 className="card-title">{props.name}</h5>

            <p className="card-text">
              Gender: <br />
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

export default CardVehicles;
