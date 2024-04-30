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
import { caravan } from "../mock/caravandata";

const GridCarBoxComponent = () => {
  const data = caravan.maindata;
  console.log("camp data:", data);
  return (
    <CarBoxContainer>
      {data.map((value, key) => {
        return (
          <Link to={`${value.id}`} style={{textDecoration: "none"}}>
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
                    <p> {value.caravan.rate || "no data"}</p>
                    <img src={star1} alt="starIcon" />
                  </CarBoxRateWrapper>
                </BrandName>
                <Price>{value.caravan.cost || "no data"}</Price>
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
  );
};

export default GridCarBoxComponent;
