import React from "react";
import { campcar } from "../mock/mockdata";
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

const GridCarBoxComponent = () => {
  const data = campcar.maindata;
  console.log("camp data:", data);
  return (
    <CarBoxContainer>
      {data.map((value, key) => {
        return (
          <Link to={`${value.id}`} style={{textDecoration: "none"}}>
            <CarBox $maxWidth key={key}>
              <CarBoxImage $hight150px>
                <img
                  src={value.car.photo || "no photo"}
                  alt="no photo1"
                  style={{ width: "100%" }}
                />
              </CarBoxImage>
              <CarBoxInfo>
                <CostText $fontSize $fontWeight>
                  {value.car.name || "no data"}
                </CostText>
                <BrandName>
                  {value.car.company || "no data"}
                  <CarBoxRateWrapper>
                    <p> {value.car.rate || "no data"}</p>
                    <img src={star1} alt="starIcon" />
                  </CarBoxRateWrapper>
                </BrandName>
                <Price>{value.car.cost || "no data"}</Price>
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
