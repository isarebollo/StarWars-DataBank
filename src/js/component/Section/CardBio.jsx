import React from "react";
import "../../../styles/CardBio.css";

const CardBio = () => {
  return (
    <>
     
      <div className="container " >
        <div className="row text-center ">
          <div className="col-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png"
              className="img-thumbnail"
              alt="..."
            ></img>
          </div>
          <div className="col-6">
            <div className="card-body">
              <h5 className="card-title"> Title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBio;
