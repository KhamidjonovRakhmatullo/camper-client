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
import CaravanInfoComponent from "./others/caravanInfo";
import CampingPlaceComponent from "./campingPlace/campingPlace";
import TuningInfoComponent from "./others/tuningInfo";
import UsedCarInfoComponent from "./others/usedCarInfo";
import MotorInfoComponent from "./others/motorInfo";
import CampingPlaceInfoComponent from "./others/campingPlaceInfo";
import MultiCarouselInfoComponent from "./others/multiCarouselInfo";
import CreateAccountComponent from "./navbar/pages/createAccount";
import CartComponent from "./cart/cart";
import CheckBoxComponent from "./useState/checkBox";
import ChatGPTComponent from "./useState/chatGPT";

const RouterComponent = () => {
  const location = useLocation()
  const hideNavabr = location.pathname !=="/notfound" && location.pathname !== "/createAccount"; 
  // const hide = location.pathname !== "createAccount"; 
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
        <Route path="campingPlace" element={<CampingPlaceComponent/>}/>

        <Route path="useState" element={<UseStateComponent/>}/>
        <Route path="checkBox" element={<CheckBoxComponent/>}/>
        <Route path="chatGPT" element={<ChatGPTComponent/>}/>

        <Route path="motor/:id" element={<MotorInfoComponent/>}/>
        <Route path="caravan/:id" element={<CaravanInfoComponent/>}/>
        <Route path="tuning/:id" element={< TuningInfoComponent/>}/>
        <Route path="usedcar/:id" element={<UsedCarInfoComponent/>}/>
        <Route path="campingPlace/:id" element={<CampingPlaceInfoComponent/>}/>
        <Route path="multiCarouselInfo/:id" element={< MultiCarouselInfoComponent/>}/>
        
        {/* <Route path="signIn" element={<SignInComponent/>}/> */}
        <Route path="/createAccount" element={<CreateAccountComponent/>}/>

        <Route path="motor/:id/cart" element={<CartComponent/>}/>
        
      </Routes>
     
      {hideNavabr && <FooterComponent/>}
    </>
  );
};

export default RouterComponent;
