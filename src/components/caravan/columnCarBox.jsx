import React from 'react'
import { BrandName, CarBox, CarBoxButton, CarBoxButtonWrapper, CarBoxContainer, CarBoxImage, CarBoxImgWrapper, CarBoxInfo, CarBoxPriceWrapper, CarBoxRateWrapper, CostText, Price } from "../../styles/motorStyled";
import star1 from '../assets/carStar.svg'
import { Link } from 'react-router-dom';

const ColumnCarBox = ({exportedData}) => {
  return (
    <CarBoxContainer $flex $column $maxWidthForColumn>
      {exportedData.map((value, key) => { 
        return (
          <Link to={`${value.id}`} style={{textDecoration: "none"}}>
          <CarBox $flexBox key={key}>
               <CarBoxImage $maxWidthForImage>
                   <img src={value.caravan.image || "no photo"} alt="no photo1"  style={{width: "100%"}}/>
               </CarBoxImage>
               <CarBoxInfo $paddingTwoSides>
                  <CarBoxPriceWrapper>
                       <CostText $fontSize $fontWeight>{value.caravan.name || "no data"}</CostText>
                       <Price>{value.caravan.price || "no data"}</Price>
                  </CarBoxPriceWrapper>
                   <BrandName>{value.caravan.company || "no data"}
                       <CarBoxRateWrapper>
                           <p> {value.caravan.rate || "no rate"}</p>
                           <img src={star1} alt="starIcon" />
                       </CarBoxRateWrapper>
                   </BrandName>
                   <CarBoxButtonWrapper $marginTop45>
                         <CarBoxButton $paddingColumn>ORDER</CarBoxButton>
                         <CarBoxButton $$paddingRnL $paddingColumn>COMPARE</CarBoxButton>
                   </CarBoxButtonWrapper>
               </CarBoxInfo>
          </CarBox>
        </Link>
        ); 
      })}
    </CarBoxContainer>
  );
}   

export default ColumnCarBox