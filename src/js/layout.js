import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
import InfoCharacter from "./component/Section/InfoCharacter.jsx";
import InfoPlanet from "./component/Section/InfoPlanet.jsx"; 
import InfoVehicle from "./component/Section/InfoVehicle.jsx"; 

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/character" element={<InfoCharacter />}></Route>
            <Route path="/planet" element={<InfoPlanet />}></Route>
            <Route path="/vehicle" element={<InfoVehicle />}></Route>
            <Route path="/demo" element={<Demo />}></Route>
            <Route path="/single/:theid" element={<Single />}></Route>
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
