import React,{useContext} from "react";
import "../../../styles/CardBio.css";
import { Context } from "../../store/appContext.js";

const InfoVehicle = () => {
  const {store}=useContext(Context);


  return (
    <>
      <div className="container ">
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
              <h2 className="card-title"> {store.vehicleProperties.name}</h2>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div className="card-text" id="Properties" >
           <div className="description">
             <h4>Name </h4>
             <h6>{store.vehicleProperties.name}</h6>
           </div>
           <div className="description">
             <h4>model</h4>
             <h6>{store.vehicleProperties.model}</h6>
           </div>
           <div className="description">
             <h4>manufacturer</h4>
             <h6>{store.vehicleProperties.manufacturer}</h6>
           </div>
           <div className="description">
             <h4>length</h4>
             <h6>{store.vehicleProperties.length}</h6>
           </div>
           <div className="description">
             <h4>crew</h4>
             <h6>{store.vehicleProperties.crew}</h6>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoVehicle;
