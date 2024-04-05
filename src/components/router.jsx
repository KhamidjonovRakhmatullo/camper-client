import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComponent from "./navbar/navbar";
import MotorComponent from "./motor/motor";
import FooterComponent from "./footer/footer";

const RouterComponent = () => {
  return (
    <BrowserRouter>
    <NavbarComponent/>
      <Routes>
        <Route path="/" element={<MotorComponent/>}/>
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
  );
};

export default RouterComponent;
