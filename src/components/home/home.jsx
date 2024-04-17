import React from "react";
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/mainBg.png";
import img2 from "../assets/mainBg2.png";
import img3 from "../assets/motorMain1.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { HomeCarousel, HomeContainer } from "../../styles/homeStyle";
import MultiCarousel from "./multiCarousel";

const HomeComponent = () => {
  return (
    <HomeContainer>
      {/* <HomeCarousel>
        <Carousel
          autoPlay
          showArrows={true}
          showThumbs={false}
          // onChange={onChange}
          // onClickItem={onClickItem}
          // onClickThumb={onClickThumb}
        >
          <div>
            <img src={img1} alt="img" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={img2} alt="img" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={img3} alt="img" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </HomeCarousel> */}
      <div>
        <div>
          <h1>Hello Wolrd</h1>
        </div>
        <div style={{border: "1px solid red", width :"100%", maxWidth: "1400px"}}>
         <MultiCarousel/>
         </div>
      </div>
    </HomeContainer>
  );
};

export default HomeComponent;
