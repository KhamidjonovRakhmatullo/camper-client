import React from "react";
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/mainBg.png";
import img2 from "../assets/mainBg2.png";
import img3 from "../assets/motorMain1.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { HomeCarousel, HomeContainer, HomeContainer2 } from "../../styles/homeStyle";
import MultiCarousel from "./multiCarousel";
import ModalComponent from "./modal";
import BlogsComponent from "./blogs";

const HomeComponent = () => {
  return (
    <HomeContainer>
      <HomeCarousel>
        <Carousel
          infinite
          autoPlay
          showArrows={true}
          showThumbs={false}
          // onChange={onChange}
          // onClickItem={onClickItem}
          // onClickThumb={onClickThumb}
        >
          <div>
            <img src={img1} alt="img" />
          </div>
          <div>
            <img src={img2} alt="img" />
          </div>
          <div>
            <img src={img3} alt="img" />
          </div>
        </Carousel>
      </HomeCarousel>
      <HomeContainer2>
        <MultiCarousel />
        <ModalComponent />
        <BlogsComponent />
      </HomeContainer2>
    </HomeContainer>
  );
};

export default HomeComponent;
