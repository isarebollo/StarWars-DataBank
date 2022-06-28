import React from "react";

import "../../styles/home.css";

import CharacterSection from "../component/Section/CharacterSection.jsx";
import PlanetsSection from "../component/Section/PlanetsSection.jsx";
import VehiclesSection from "../component/Section/VehiclesSection.jsx";

export const Home = () => {
  return (
    <>
       <CharacterSection />
      <PlanetsSection />
      <VehiclesSection /> 
      
    </>
  );
};
