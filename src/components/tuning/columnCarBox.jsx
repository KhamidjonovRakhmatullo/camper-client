import React from 'react'
import { campcar } from "../mock/mockdata";
import { BrandName, CarBox, CarBoxButton, CarBoxButtonWrapper, CarBoxContainer, CarBoxImgWrapper, CarBoxInfo, CarBoxPriceWrapper, CarBoxRateWrapper, CostText, Price } from "../../styles/motorStyled";
import star1 from '../assets/carStar.svg'

const ColumnCarBoxComponent = () => {
  const data = campcar.maindata;
  console.log("camp data:", data);
  console.log (data.slice (-12))
  const data2 = data.slice (-12)
  return (
    <CarBoxContainer $flex $column $maxWidthForColumn>
      {data2.map((value, key) => { 
        return (
          <CarBox $flexBox key={key}>
               <CarBoxImgWrapper>
                   <img src={value.car.photo || "no photo"} alt="no photo1"  style={{width: "100%"}}/>
               </CarBoxImgWrapper>
               <CarBoxInfo $paddingTwoSides>
                  <CarBoxPriceWrapper>
                       <CostText $fontSize $fontWeight>{value.car.name || "no data"}</CostText>
                       <Price>{value.car.cost || "no data"}</Price>
                  </CarBoxPriceWrapper>
                   <BrandName>{value.car.company || "no data"}
                       <CarBoxRateWrapper>
                           <p> {value.car.rate || "no data"}</p>
                           <img src={star1} alt="starIcon" />
                       </CarBoxRateWrapper>
                   </BrandName>
                   <CarBoxButtonWrapper $marginTop45>
                         <CarBoxButton>ORDER</CarBoxButton>
                         <CarBoxButton>COMPARE</CarBoxButton>
                   </CarBoxButtonWrapper>
               </CarBoxInfo>
          </CarBox>
        ); 
      })}
    </CarBoxContainer>
  );
}   

export default ColumnCarBoxComponent