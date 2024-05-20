import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import gommet1 from "../assets/grommet.svg";
import {
  ContainerTitle,
  ContainerTitleWrapper,
  RecommendBox,
  RecommendBoxText,
  RecommendContainer,
  RecommendImgWrapper,
  RecommendInfoWrapper,
  UnderLine,
} from "../../styles/homeStyle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { campcar } from "../mock/mockdata";
import { Link } from "react-router-dom";

const MultiCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    desktop1: {
      breakpoint: { max: 1400, min: 1100 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1100, min: 700 },
      items: 2.5,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1.5,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const data = campcar.maindata;
  console.log("camp data:", data);

  return (
    <RecommendContainer>
      <ContainerTitleWrapper>
        <ContainerTitle>Recommend</ContainerTitle>
        <UnderLine $width170></UnderLine>
      </ContainerTitleWrapper>
      <Carousel
        // showDots={true}
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        transitionDuration={1500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {data.map((value, key) => {
          return (
            <Link to={`${value.id}`} style={{textDecoration: "none"}}>
            <RecommendBox key={key}>
              <RecommendImgWrapper>
                <img src={value.car.photo} alt="camping-car" />
              </RecommendImgWrapper>
              <RecommendInfoWrapper>
                <RecommendBoxText>{value.car.name}</RecommendBoxText>
                <Box sx={{ "& button": { m: 1 } }}>
                  <Button
                    variant="contained"
                    size="medium"
                    sx={{ transform: "skew(-20deg)", borderRadius: "0px" }}
                  >
                   <p style={{ transform: "skew(+20deg)"}}>Discover the range</p> 
                  </Button>
                </Box>
                <div style={{ display: "flex", gap: "10px" }}>
                  <p>Choose a model</p>
                  <img src={gommet1} alt="icon" />
                </div>
              </RecommendInfoWrapper>
            </RecommendBox>
          </Link>
          );
        })}
      </Carousel>
    </RecommendContainer>
  );
};

export default MultiCarousel;
