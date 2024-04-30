import React from "react";
import {  NavbarContainer, StdLogo, NavbarP, NavItemsWrapper, NavItemWrapper2, MenuImg, LogoWrapper, NavItemsContainer, NavRightWrapper } from "../../styles/NavStyled";
import grommet1 from "../assets/grommet.svg";
import cart1 from "../assets/cart.svg";
import user1 from "../assets/user.svg";
import { Link } from "react-router-dom";
import LeftMenuButton from "./pages/leftMenu";
import RightMenuButton from "./pages/RightMenu";

const NavbarComponent = () => {
  return (
      <NavbarContainer>

        <LogoWrapper>
          <MenuImg $marginRight>
            <LeftMenuButton/>
          </MenuImg>
           <Link to="/" style={{textDecoration: "none"}}>
          <StdLogo>Camper</StdLogo>
           </Link>
        </LogoWrapper>

        <NavItemsContainer>
          <NavItemsWrapper>
            <Link to="motor" style={{textDecoration: "none"}}>
              <NavbarP>Motor</NavbarP>
            </Link>
            <img src={grommet1} alt="icon" />
          </NavItemsWrapper>
          <NavItemsWrapper>
            <Link to="caravan" style={{textDecoration: "none"}}>
              <NavbarP>Caravan</NavbarP>
            </Link>
            <img src={grommet1} alt="icon" />
          </NavItemsWrapper>
          <NavItemsWrapper>
            <Link to="tuning" style={{textDecoration: "none"}}>
              <NavbarP>Tuning</NavbarP>
            </Link>
            <img src={grommet1} alt="icon" />
          </NavItemsWrapper>
          <NavItemsWrapper>
            <Link to="usedCar" style={{textDecoration: "none"}}>
              <NavbarP>Used Car</NavbarP>
            </Link>
            <img src={grommet1} alt="icon" />
          </NavItemsWrapper>
        </NavItemsContainer>

        <NavItemWrapper2>
        <Link to="campingPlace" style={{textDecoration: "none"}}>
          <NavbarP>Camping Place</NavbarP>
        </Link>
        </NavItemWrapper2>

        <NavRightWrapper>
          <img src={cart1} alt="cart" />
          <img src={user1} alt="user" />
          <div style={{ display: "flex",gap: "5px" }}>
           <NavbarP>En</NavbarP>
            <img src={grommet1} alt="icon" />
          </div>
        </NavRightWrapper>
        <MenuImg $DisplayFlex $gap>
            <img src={cart1} alt="cart" />
            <RightMenuButton/>
          </MenuImg>
      </NavbarContainer>
  );
};

export default NavbarComponent;
