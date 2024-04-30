import React from "react";
import campsite1 from "../assets/place1.webp";
import {
  CampPlaceImgWrapper,
  CampPlaceImgWrapper2,
  CampPlaceInfoContainer,
  CampPlaceInfoContainer2,
  CampPlaceLocation,
  CampPlaceName,
  DescriptionWrapper,
  LocationInfo,
  LocationInfoLeft,
  LocationInfoRight,
  LocationInfosContainer,
  MapWrapper1,
} from "../../styles/campingPlaceStyle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useParams } from "react-router-dom";
import { campingPlace } from "../mock/campingPlacedata";
import Button from '@mui/material/Button';
import { DividerWrapper } from "../../styles/carInfoStyle";
import location1 from '../assets/carbon_location.svg'
import phone1 from '../assets/carbon_phone.svg'
import clock1 from '../assets/bi_clock.svg'
import home1 from '../assets/codicon_home.svg'
import koreamap1 from '../assets/Screenshot 2024-04-30 at 8.08.45 PM.png'


const CampingPlaceInfoComponent = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const {id} = useParams();
  console.log ("userId", id)
  const data1 =campingPlace.maindata
  const resultData = data1.find(
    (value) => value.id === parseInt(id)
  );
  console.log("id Info:", resultData);

  return (
    <CampPlaceInfoContainer>
    <CampPlaceInfoContainer2>
      <Carousel
        showDots={false}
        arrows={false}
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={1000}
        transitionDuration={1500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        <CampPlaceImgWrapper>
          <img src={campsite1} alt="img" />
        </CampPlaceImgWrapper>
        <CampPlaceImgWrapper>
          <img src={campsite1} alt="img" />
        </CampPlaceImgWrapper>
        <CampPlaceImgWrapper>
          <img src={campsite1} alt="img" />
        </CampPlaceImgWrapper>
        <CampPlaceImgWrapper>
          <img src={campsite1} alt="img" />
        </CampPlaceImgWrapper>
        <CampPlaceImgWrapper>
          <img src={campsite1} alt="img" />
        </CampPlaceImgWrapper>
        <CampPlaceImgWrapper>
          <img src={campsite1} alt="img" />
        </CampPlaceImgWrapper>
        <CampPlaceImgWrapper>
          <img src={campsite1} alt="img" />
        </CampPlaceImgWrapper>
        <CampPlaceImgWrapper>
          <img src={campsite1} alt="img" />
        </CampPlaceImgWrapper>
      </Carousel>
      <CampPlaceName>
      {resultData.campingPlace.name}
      </CampPlaceName>
      <CampPlaceLocation>
        {resultData.campingPlace.location}
        <Button size="small" sx={{height: "25px", width: "120px", border: "1px solid  #FF7A00", color: "#FF7A00"}}>Copy map</Button>
      </CampPlaceLocation>
      <DividerWrapper></DividerWrapper>

      <LocationInfosContainer>
        <LocationInfoLeft>
        <LocationInfo>
          <img src={location1} alt="img" />
          {resultData.campingPlace.city}
        </LocationInfo>
        <LocationInfo>
          <img src={phone1} alt="img" />
          {resultData.campingPlace.phone_number}
        </LocationInfo>
        </LocationInfoLeft>
        <LocationInfoRight>
        <LocationInfo>
          <img src={clock1} alt="img"/>
          from
          <div style={{color: "#FF7A00", fontWeight: "500"}}>
          {resultData.campingPlace.working_hour.from}
          </div>
            to
          <div style={{color: "#FF7A00", fontWeight: "500"}}>
          {resultData.campingPlace.working_hour.to}
          </div>
        </LocationInfo>
        <LocationInfo>
          <img src={home1} alt="img" />
          <div style={{color: "#006DAB"}}>
          {resultData.campingPlace.home_page}
          </div>
        </LocationInfo>
        </LocationInfoRight>
      </LocationInfosContainer>

      <DescriptionWrapper>
        <h3>Description</h3>
        {resultData.campingPlace.description}
      </DescriptionWrapper>

      <MapWrapper1>
        <img src={koreamap1} alt="img" />
      </MapWrapper1>




    </CampPlaceInfoContainer2>
    </CampPlaceInfoContainer>
  );
};

export default CampingPlaceInfoComponent;
