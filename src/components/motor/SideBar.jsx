import React from "react";
import {
  Border,
  CompareBox,
  CostText,
  CostTitle,
  SearchButton,
  CostCarBoxWrapper,
  CostOfCarContainer,
  FromToBox,
} from "../../styles/motorStyled";
import { DispJustAlgn } from "../../styles/styled";
import grommet2 from "../assets/grommet.svg";
import compare22 from "../assets/compare2.png";

const CostComponent = () => {
  return (
    <CostOfCarContainer>
      <CostCarBoxWrapper>
        <CostTitle>Cost of car</CostTitle>
        <Border></Border>
        <DispJustAlgn style={{ padding: "20px 0px 50px 0px", gap: "25px" }}>
          <FromToBox>
            <CostText>from</CostText>
            <input type="text" />
          </FromToBox>
          <FromToBox>
            <CostText>to</CostText>
            <input type="text" />
          </FromToBox>
        </DispJustAlgn>
      </CostCarBoxWrapper>

      <CostCarBoxWrapper>
        <DispJustAlgn
          style={{ justifyContent: "space-between", width: "100%" }}
        >
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

      <CostCarBoxWrapper>
        <DispJustAlgn
          style={{ justifyContent: "space-between", width: "100%" }}
        >
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

      <CostCarBoxWrapper>
        <DispJustAlgn
          style={{ justifyContent: "space-between", width: "100%" }}
        >
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

      <CostCarBoxWrapper>
        <DispJustAlgn
          style={{ justifyContent: "space-between", width: "100%" }}
        >
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

      <CostCarBoxWrapper>
        <DispJustAlgn
          style={{ justifyContent: "space-between", width: "100%" }}
        >
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
