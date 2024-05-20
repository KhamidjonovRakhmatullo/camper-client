import React from "react";
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/campCarOboi-2.jpg";
import img2 from "../assets/campCarOboi-5.jpg";
import img3 from "../assets/campCarOboi-3.jpg";
import img4 from "../assets/campCarOboi-1.jpg.webp";
import img5 from "../assets/campCarOboi-4.jpg.webp";
import img6 from "../assets/campCarOboi-6.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {
  HomeCarousel,
  HomeContainer,
  HomeContainer2,
  ResponsiveOfCarausel,
} from "../../styles/homeStyle";
import MultiCarousel from "./multiCarousel";
import ModalComponent from "./modal";
import BlogsComponent from "./blogs";

const HomeComponent = () => {
  return (
    <HomeContainer>
      <HomeCarousel>
        <Carousel
          showArrows={true}
          showThumbs={false}
          infinite
          autoPlay
          // autoPlaySpeed={4000}
          // transitionDuration={3000}
          // onChange={onChange}
          // onClickItem={onClickItem}
          // onClickThumb={onClickThumb}
        >
          <img src={img1} alt="img" />
          <img src={img2} alt="img" />
          <img src={img3} alt="img" />
          <img src={img4} alt="img" />
          <img src={img5} alt="img" />
          <img src={img6} alt="img" />
        </Carousel>
      </HomeCarousel>
      <ResponsiveOfCarausel>
      <MultiCarousel />
      </ResponsiveOfCarausel>
      <HomeContainer2>
        <ModalComponent />
        <BlogsComponent />
      </HomeContainer2>
    </HomeContainer>
  );
};

export default HomeComponent;
