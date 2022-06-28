import React, { useContext } from "react";
import "../../../styles/CardBio.css";
import { Context } from "../../store/appContext.js";

const InfoCharacter = (props) => {
  const { store } = useContext(Context);
  

  return (
    <>
      <div className="container ">
        <div className="row text-center ">
          <div className="col-6">
            <img
              src="https://cdn.shopify.com/s/files/1/0190/5436/2724/articles/star_wars_personajes_800x.jpg?v=1616087475"
              className="img-thumbnail"
              alt="..."
                          
            ></img>
          </div>
          <div className="col-6">
            <div className="card-body">
              <h2 className="card-title" id="card-title-bio">
                <strong> {store.characterProperties.name} </strong>{" "}
              </h2>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div className="card-text" id="Properties">
            <div className="description">
              <h4>Name </h4>
              <h6>{store.characterProperties.name}</h6>
            </div>
            <div className="description">
              <h4>Gender</h4>
              <h6>{store.characterProperties.gender}</h6>
            </div>
            <div className="description">
              <h4>Birth Year</h4>
              <h6>{store.characterProperties.birth_year}</h6>
            </div>
            <div className="description">
              <h4>Eye Color</h4>
              <h6>{store.characterProperties.eye_color}</h6>
            </div>
            <div className="description">
              <h4>Hair Color</h4>
              <h6>{store.characterProperties.hair_color}</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCharacter;
