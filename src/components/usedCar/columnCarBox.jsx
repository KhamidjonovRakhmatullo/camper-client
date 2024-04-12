import React from 'react'
import { BrandName, CarBox, CarBoxButton, CarBoxButtonWrapper, CarBoxContainer, CarBoxImgWrapper, CarBoxInfo, CarBoxPriceWrapper, 
    CarBoxRateWrapper, CostText, Price } from '../../styles/motorStyled'
import { caravan } from '../mock/caravandata'
import star1 from '../assets/carStar.svg'

const ColumnCarBox = () => {
    const data = caravan.maindata
    console.log ("All result:", data)
    return(
    <CarBoxContainer $flex $column $maxWidthForColumn>
        {data.map((value, key) => {
            return(
                <CarBox $flexBox key={key}>
                <CarBoxImgWrapper>
                    <img src={value.caravan.image} alt="car photo" />
                </CarBoxImgWrapper>
                <CarBoxInfo $paddingTwoSides> 
                    <CarBoxPriceWrapper>
                        <CostText $fontSize $fontWeight>{value.caravan.name}</CostText>
                        <Price>{value.caravan.price}</Price>
                    </CarBoxPriceWrapper>
                    <BrandName>{value.caravan.company}
                        <CarBoxRateWrapper>
                            <p>{value.caravan.rate}</p>
                            <img src={star1} alt="starIcon" />
                        </CarBoxRateWrapper>
                    </BrandName>
                    <CarBoxButtonWrapper $marginTop45>
                        <CarBoxButton>ORDER</CarBoxButton>
                        <CarBoxButton>COMPARE</CarBoxButton>
                    </CarBoxButtonWrapper>
                </CarBoxInfo>
            </CarBox>
            )
        })}
    </CarBoxContainer>
  )
}

export default ColumnCarBox