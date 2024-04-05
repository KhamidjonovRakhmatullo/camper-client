import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComponent from "./navbar/navbar";
import MotorComponent from "./motor/motor";
import FooterComponent from "./footer/footer";
import TuningComponent from "./tuning/tuning";
import CaravanComponent from "./caravan/caravan";
import UsedCarComponent from "./usedCar/usedCar";

const RouterComponent = () => {
  return (
    <BrowserRouter>
    <NavbarComponent/>
      <Routes>
        <Route path="/" element={<MotorComponent/>}/>
        <Route path="motor" element= {<CaravanComponent/>}/>
        <Route path="tuning" element={<TuningComponent/>}/>
        <Route path="tuning" element={<UsedCarComponent/>}/>



      </Routes>
      <FooterComponent/>
    </BrowserRouter>
  );
};

export default RouterComponent;
