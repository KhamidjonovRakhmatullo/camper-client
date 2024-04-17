import React from "react";
<<<<<<< HEAD:src/components/motor/cost.jsx
import {
  Border,
  CompareBox,
  CostText,
  CostTitle,
  SearchButton,
} from "./motorStyled";
=======
import { Border, CompareBox, CostText, CostTitle, SearchButton, CostCarBoxWrapper, CostOfCarContainer, FromToBox } from "../../styles/motorStyled";
>>>>>>> 668968f45d403c141494987d206f376d8d76491a:src/components/motor/SideBar.jsx
import { DispJustAlgn } from "../../styles/styled";
import grommet2 from "../assets/grommet.svg";
import compare22 from "../assets/compare2.png";

const CostComponent = () => {
  return (
<<<<<<< HEAD:src/components/motor/cost.jsx
    <DispJustAlgn $column $alignStart style={{ gap: "50px" }}>
      <DispJustAlgn $column $alignStart>
        <CostTitle>Cost of car</CostTitle>
        <Border></Border>
        <DispJustAlgn style={{ padding: "20px 0px 50px 0px", gap: "25px" }}>
          <DispJustAlgn $column $alignStart>
            <CostText>from</CostText>
            <input
              type="text"
              style={{ height: "36px", width: "91px", borderRadius: "10px" }}
            />
          </DispJustAlgn>
          <DispJustAlgn $column $alignStart>
            <CostText>to</CostText>
            <input
              type="text"
              style={{ height: "36px", width: "91px", borderRadius: "10px" }}
            />
          </DispJustAlgn>
        </DispJustAlgn>
      </DispJustAlgn>

      <DispJustAlgn $column $alignStart>
        <DispJustAlgn
          style={{ justifyContent: "space-between", width: "100%" }}
        >
=======
    <CostOfCarContainer>

      
      <CostCarBoxWrapper>
        <CostTitle>Cost of car</CostTitle>
        <Border></Border>
        <DispJustAlgn style={{ padding: "20px 0px 50px 0px", gap: "25px",}}>
          <FromToBox>
            <CostText>from</CostText>
            <input type="text"/>
          </FromToBox>
          <FromToBox>
            <CostText>to</CostText>
            <input type="text"/>
          </FromToBox>
        </DispJustAlgn>
      </CostCarBoxWrapper>

      <CostCarBoxWrapper>
        <DispJustAlgn style={{ justifyContent: "space-between", width: "100%"}}>
>>>>>>> 668968f45d403c141494987d206f376d8d76491a:src/components/motor/SideBar.jsx
          <CostTitle>Brand</CostTitle>
          <img src={grommet2} alt="icon" />
        </DispJustAlgn>
        <Border></Border>
        <DispJustAlgn $column $alignStart $gap>
          <DispJustAlgn $gap>
            <input type="checkbox" /> <CostText>Aidal</CostText>
          </DispJustAlgn>
          <DispJustAlgn $gap>
            <input type="checkbox" /> <CostText>Knal</CostText>
          </DispJustAlgn>
          <DispJustAlgn $gap>
            <input type="checkbox" /> <CostText>escape</CostText>
          </DispJustAlgn>
        </DispJustAlgn>
      </CostCarBoxWrapper>

<<<<<<< HEAD:src/components/motor/cost.jsx
      <DispJustAlgn $column $alignStart>
        <DispJustAlgn
          style={{ justifyContent: "space-between", width: "100%" }}
        >
=======
      <CostCarBoxWrapper>
        <DispJustAlgn style={{ justifyContent: "space-between", width: "100%"}}>
>>>>>>> 668968f45d403c141494987d206f376d8d76491a:src/components/motor/SideBar.jsx
          <CostTitle>Company</CostTitle>
          <img src={grommet2} alt="icon" />
        </DispJustAlgn>
        <Border></Border>
        <DispJustAlgn $column $alignStart $gap>
          <DispJustAlgn $gap>
            <input type="checkbox" /> <CostText>Aidal</CostText>
          </DispJustAlgn>
          <DispJustAlgn $gap>
            <input type="checkbox" /> <CostText>Knal</CostText>
          </DispJustAlgn>
        </DispJustAlgn>
      </CostCarBoxWrapper>

<<<<<<< HEAD:src/components/motor/cost.jsx
      <DispJustAlgn $column $alignStart>
        <DispJustAlgn
          style={{ justifyContent: "space-between", width: "100%" }}
        >
=======
      <CostCarBoxWrapper>
        <DispJustAlgn style={{ justifyContent: "space-between", width: "100%" }}>
>>>>>>> 668968f45d403c141494987d206f376d8d76491a:src/components/motor/SideBar.jsx
          <CostTitle>License type</CostTitle>
          <img src={grommet2} alt="icon" />
        </DispJustAlgn>
        <Border></Border>
        <DispJustAlgn $column $alignStart $gap>
          <DispJustAlgn $gap>
            <input type="checkbox" /> <CostText>1 year</CostText>
          </DispJustAlgn>
          <DispJustAlgn $gap>
            <input type="checkbox" /> <CostText>2 year</CostText>
          </DispJustAlgn>
          <DispJustAlgn $gap>
            <input type="checkbox" /> <CostText>1.5 year</CostText>
          </DispJustAlgn>
        </DispJustAlgn>
      </CostCarBoxWrapper>

<<<<<<< HEAD:src/components/motor/cost.jsx
      <DispJustAlgn $column $alignStart>
        <DispJustAlgn
          style={{ justifyContent: "space-between", width: "100%" }}
        >
=======
      <CostCarBoxWrapper>
        <DispJustAlgn style={{ justifyContent: "space-between", width: "100%" }}>
>>>>>>> 668968f45d403c141494987d206f376d8d76491a:src/components/motor/SideBar.jsx
          <CostTitle>Number of travelers</CostTitle>
          <img src={grommet2} alt="icon" />
        </DispJustAlgn>
        <Border></Border>
        <DispJustAlgn $column $alignStart $gap>
          <DispJustAlgn $gap>
            <input type="checkbox" /> <CostText>2</CostText>
          </DispJustAlgn>
          <DispJustAlgn $gap>
            <input type="checkbox" /> <CostText>3-4</CostText>
          </DispJustAlgn>
          <DispJustAlgn $gap>
            <input type="checkbox" /> <CostText>5+</CostText>
          </DispJustAlgn>
        </DispJustAlgn>
      </CostCarBoxWrapper>

<<<<<<< HEAD:src/components/motor/cost.jsx
      <DispJustAlgn $column $alignStart>
        <DispJustAlgn
          style={{ justifyContent: "space-between", width: "100%" }}
        >
=======
      <CostCarBoxWrapper>
        <DispJustAlgn style={{ justifyContent: "space-between", width: "100%" }}>
>>>>>>> 668968f45d403c141494987d206f376d8d76491a:src/components/motor/SideBar.jsx
          <CostTitle>Location</CostTitle>
          <img src={grommet2} alt="icon" />
        </DispJustAlgn>
        <Border></Border>
        <DispJustAlgn $column $alignStart $gap>
          <DispJustAlgn $gap>
            <input type="checkbox" /> <CostText>Seoul</CostText>
          </DispJustAlgn>
          <DispJustAlgn $gap>
            <input type="checkbox" /> <CostText>Deajon</CostText>
          </DispJustAlgn>
          <DispJustAlgn $gap>
            <input type="checkbox" /> <CostText>Busan</CostText>
          </DispJustAlgn>
        </DispJustAlgn>
      </CostCarBoxWrapper>

      <DispJustAlgn $gap>
        <SearchButton>Cancel</SearchButton>
        <SearchButton>Search</SearchButton>
      </DispJustAlgn>

      <DispJustAlgn $column $alignStart $gap>
        <p style={{ color: "#006DAB" }}>Compare</p>
        <DispJustAlgn $gap $justifyStart>
          <CompareBox>
            <img src={compare22} alt="img" />
          </CompareBox>
          <CompareBox>
            <img src={compare22} alt="img" />
          </CompareBox>
          <CompareBox>
            <img src={compare22} alt="img" />
          </CompareBox>
        </DispJustAlgn>
      </DispJustAlgn>
      </CostOfCarContainer>
  );
};

export default CostComponent;
