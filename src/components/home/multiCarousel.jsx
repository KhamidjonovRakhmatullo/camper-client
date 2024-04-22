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

const MultiCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const data = campcar.maindata
  const data1 = data.slice(24,45)
  console.log ( "aaaa :", data)

  return (
    <RecommendContainer>
      <ContainerTitleWrapper>
        <ContainerTitle>Recommend</ContainerTitle>
        <UnderLine $width170></UnderLine>
      </ContainerTitleWrapper>
      <Carousel
        swipeable={false}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={400}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
       {data1.map((value, key) => { 
        return (
          <RecommendBox key={(key)}>
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
                Discover the range
              </Button>
            </Box>
            <div style={{ display: "flex", gap: "10px" }}>
              <p>Choose a model</p>
              <img src={gommet1} alt="icon" />
            </div>
          </RecommendInfoWrapper>
          </RecommendBox>
        ); 
      })}
      </Carousel>
    </RecommendContainer>
  );
};

export default MultiCarousel;
