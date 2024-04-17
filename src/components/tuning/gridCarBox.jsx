import React from "react";
import { campcar } from "../mock/mockdata";
import { BrandName, CarBox, CarBoxButton, CarBoxButtonWrapper, CarBoxContainer, CarBoxImgWrapper, CarBoxInfo, CarBoxRateWrapper, CostText, Price } from "../../styles/motorStyled";
import star1 from '../assets/carStar.svg'

const GridCarBoxComponent = () => {
  const data = campcar.maindata;
  // console.log("camp data:", data);
  // console.log (data.slice (-12))
  const data2 = data.slice (-12)
  // console.log (data2.car(Math.max(cost)))
  return (
    <CarBoxContainer>
      {data2.map((value, key) => { 
        return (
          <CarBox $maxWidth key={key}>
              <CarBoxImgWrapper>
                  <img src={value.car.photo || "no photo"} alt="no photo1"  style={{width: "100%"}}/>
              </CarBoxImgWrapper>
              <CarBoxInfo>
                  <CostText $fontSize $fontWeight>{value.car.name || "no data"}</CostText>
                  <BrandName>{value.car.company || "no data"}
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
        ); 
      })}
    </CarBoxContainer>
  );
};

export default GridCarBoxComponent;
