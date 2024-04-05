import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComponent from "./navbar/navbar";
import MotorComponent from "./motor/motor";
import FooterComponent from "./footer/footer";
import TuningComponent from "./tuning/tuning";
import UsedCarComponent from "./usedCar/usedCar";
import CaravanComponent from "./caravan/caravan";

const RouterComponent = () => {
  return (
    <BrowserRouter>
    <NavbarComponent/>
      <Routes>
        <Route path="/" element={<MotorComponent/>}/>
        <Route path="caravan" element={<CaravanComponent/>}/>
        <Route path="tuning" element={<TuningComponent/>}/>
        <Route path="usedCar" element={<UsedCarComponent/>}/>

      </Routes>
      <FooterComponent/>
    </BrowserRouter>
  );
};

export default RouterComponent;
