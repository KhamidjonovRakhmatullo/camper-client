import React from "react";
import { StdLogo, NavbarP } from "./NavStyled";
import { DispJustAlgn,} from "../../styles/styled";
import grommet1 from "../assets/grommet.svg";
import cart1 from "../assets/cart.svg";
import user1 from "../assets/user.svg";

const NavbarComponent = () => {
  return (
    <div>
      <DispJustAlgn
        style={{
          border: "0px solid red",
          padding: "22px 70px",
          justifyContent: "space-around",
          // position: "sticky",
          // top: "20px",
          // width: "100%",
          backgroundColor: "white"
        }}
      >
        <DispJustAlgn $justifyStart style={{ flex: "1.5" }}>
          <StdLogo>Camper</StdLogo>
        </DispJustAlgn>

        <DispJustAlgn
          style={{
            justifyContent: "space-around",
            flex: "2.5",
            border: "0px solid blue",
          }}
        >
          <DispJustAlgn>
            <NavbarP>Motor</NavbarP>
            <img src={grommet1} alt="icon" />
          </DispJustAlgn>
          <DispJustAlgn>
            <NavbarP>Caravan</NavbarP>
            <img src={grommet1} alt="icon" />
          </DispJustAlgn>
          <DispJustAlgn>
            <NavbarP>Tuning</NavbarP>
            <img src={grommet1} alt="icon" />
          </DispJustAlgn>
          <DispJustAlgn>
            <NavbarP>Used Car</NavbarP>
            <img src={grommet1} alt="icon" />
          </DispJustAlgn>
        </DispJustAlgn>

        <DispJustAlgn style={{ flex: "1" }}>
          <NavbarP>Camping Place</NavbarP>
        </DispJustAlgn>

        <DispJustAlgn style={{ flex: "0.6", justifyContent: "space-around" }}>
          <img src={cart1} alt="cart" />
          <img src={user1} alt="user" />
          <DispJustAlgn style={{gap: "5px"}}>
            <p>En</p>
            <img src={grommet1} alt="icon" />
          </DispJustAlgn>
        </DispJustAlgn>
      </DispJustAlgn>
    </div>
  );
};

export default NavbarComponent;
