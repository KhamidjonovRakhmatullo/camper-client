import React from "react";
import {
  BrandName,
  CarBox,
  CarBoxButton,
  CarBoxButtonWrapper,
  CarBoxContainer,
  CarBoxImage,
  CarBoxInfo,
  CarBoxRateWrapper,
  CostText,
  Price,
} from "../../styles/motorStyled";
import star1 from "../assets/carStar.svg";
import { Link } from "react-router-dom";

const GridCarBoxComponent = ({exportedData}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CarBoxContainer>
        {exportedData.map((value, key) => {
          return (
            <Link to={`${value.id}`} style={{ textDecoration: "none" }}>
              <CarBox $maxWidth key={key}>
                <CarBoxImage $hight150px>
                  <img
                    src={value.caravan.image || "no photo"}
                    alt="no photo1"
                    style={{ width: "100%" }}
                  />
                </CarBoxImage>
                <CarBoxInfo>
                  <CostText $fontSize $fontWeight>
                    {value.caravan.name || "no data"}
                  </CostText>
                  <BrandName>
                    {value.caravan.company || "no data"}
                    <CarBoxRateWrapper>
                      <p> {value.caravan.rate || "no rate"}</p>
                      <img src={star1} alt="starIcon" />
                    </CarBoxRateWrapper>
                  </BrandName>
                  <Price>{value.caravan.price || "no data"}</Price>
                  <CarBoxButtonWrapper>
                    <CarBoxButton>ORDER</CarBoxButton>
                    <CarBoxButton $paddingRwnL>COMPARE</CarBoxButton>
                  </CarBoxButtonWrapper>
                </CarBoxInfo>
              </CarBox>
            </Link>
          );
        })}
      </CarBoxContainer>
    </div>
  );
};

export default GridCarBoxComponent;
