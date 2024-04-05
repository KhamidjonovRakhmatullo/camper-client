import React from "react";
import { campcar } from "../mock/mockdata";
import { BrandName, CarBox, CarBoxButton, CarBoxContainer, CostText, Price } from "./motorStyled";
import { DispJustAlgn } from "../../styles/styled";
import star1 from '../assets/carStar.svg'

const CarDetailBoxesComponent = () => {
  const data = campcar.maindata;
  console.log("camp data:", data);
  return (
    <CarBoxContainer style={{border: "0px solid red", padding: "37px 0px 60px 0px"}}>
      {data.map((value, key) => { 
        return (
          <CarBox key={key}>
            <img src={value.car.photo || "no photo"} alt="no photo1" />
            <CostText $fontSize $fontWeight>{value.car.name || "no data"}</CostText>
            <BrandName>{value.car.company || "no data"}
            <DispJustAlgn style={{gap: "5px", margin: "12px 0px 18px 0px"}}>
             <p> 5.3</p>
            <img src={star1} alt="starIcon" />
            </DispJustAlgn>
            </BrandName>
            {/* <p>{value.car.license || "no data"}</p> */}
            <Price>{value.car.cost || "no data"}</Price>
            <DispJustAlgn $gap style={{marginTop: "13px"}}>
              <CarBoxButton>ORDER</CarBoxButton>
              <CarBoxButton $paddingRwnL>COMPARE</CarBoxButton>
            </DispJustAlgn>
          </CarBox>
        ); 
      })}
    </CarBoxContainer>
  );
};

export default CarDetailBoxesComponent;
