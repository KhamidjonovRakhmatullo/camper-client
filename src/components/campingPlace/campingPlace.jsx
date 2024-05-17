import React from 'react'
import { CostText, CostTitle, MotorBgImage, Price } from '../../styles/motorStyled'
import { campingPlace } from '../mock/campingPlacedata'
import place1 from '../assets/place1.webp'
// import place2 from '../assets/campsite1.png'
// import place3 from '../assets/campsite2.png'
// import place4 from '../assets/campsite3.png'
import { CampingPlaceBox, CampingPlaceBoxContainer, CampingPlaceContainer, CampingPlaceImgWrappper, CampingPlaceInfoWrappper, CampingPlaceLocation, CampingPlaceName } from '../../styles/campingPlaceStyle'
import { Link } from 'react-router-dom'
import campSite from '../assets/campCarOboi-12.jpg'

const CampingPlaceComponent = () => {
    const data = campingPlace.maindata
  return (
    <CampingPlaceContainer>
         <MotorBgImage style={{backgroundImage: `url(${campSite})`}}>
          <CostText $fontSize $colorWhite>Home/Camping Place</CostText>
          <CostTitle $fontSize27 $fontWeight700 $paddingTop style={{color: "#fff"}} >Our Ranges</CostTitle>
          <Price $fontSize80 $colorWhiteH1 $fontSize30>Camping Places</Price>
         </MotorBgImage>
         <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
         <CampingPlaceBoxContainer>
         {data.map((value, key) => {
            return(
              <Link to={`${value.id}`} style={{textDecoration: "none"}}>
                <CampingPlaceBox key={key}>
                  <CampingPlaceImgWrappper><img src={ value.campingPlace.photo ||place1} alt="Camping Place1" /></CampingPlaceImgWrappper>
                  <CampingPlaceInfoWrappper>
                  <CampingPlaceName> {value.campingPlace.name}</CampingPlaceName>
                  <CampingPlaceLocation>{value.campingPlace.location}</CampingPlaceLocation>
                  </CampingPlaceInfoWrappper>
                </CampingPlaceBox>
              </Link>
            )
         } )}
        </CampingPlaceBoxContainer>
        </div>

     </CampingPlaceContainer>
  )
}

export default CampingPlaceComponent