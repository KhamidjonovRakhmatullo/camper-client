import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NavbarComponent from "./navbar/navbar";
import MotorComponent from "./motor/motor";
import FooterComponent from "./footer/footer";
import TuningComponent from "./tuning/tuning";
import UsedCarComponent from "./usedCar/usedCar";
import CaravanComponent from "./caravan/caravan";
import UseStateComponent from "./useState/useState";
import HomeComponent from "./home/home";
import Notfound from "./404/notfound";

const RouterComponent = () => {
  const location = useLocation()
  const hideNavabr = location.pathname !=="/notfound"
  return (
    <>
   
    {hideNavabr && <NavbarComponent/>}
      <Routes>
        <Route path="*" element={<Notfound/>} />
        <Route path="/" element={<HomeComponent/>}/>
        <Route path="/motor" element={<MotorComponent/>}/>
        <Route path="caravan" element={<CaravanComponent/>}/>
        <Route path="tuning" element={<TuningComponent/>}/>
        <Route path="usedCar" element={<UsedCarComponent/>}/>
        <Route path="useState" element={<UseStateComponent/>}/>
      </Routes>
     
      {hideNavabr && <FooterComponent/>}
    </>
  );
};

export default RouterComponent;
