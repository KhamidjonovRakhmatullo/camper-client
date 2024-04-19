import React from "react";
import Blog1 from "../assets/video-1.png";
import Blog2 from "../assets/video-2.png";
import Blog3 from "../assets/video-3.png";
import Blog4 from "../assets/video-4.png";
import Blog5 from "../assets/video-5.png";
import Blog6 from "../assets/video-6.png";
import {
    BlogText,
  BlogsContainer,
  BlogsImgWrapper,
  BlogsInfoWrapper,
  ContainerTitle,
  ContainerTitleWrapper,
  UnderLine,
} from "../../styles/homeStyle";

const BlogsComponent = () => {
  return (
    <div>
      <ContainerTitleWrapper>
        <ContainerTitle>Blogs</ContainerTitle>
        <UnderLine></UnderLine>
      </ContainerTitleWrapper>

      <BlogsContainer>
        <BlogsInfoWrapper>
          <h1>Camper car</h1>
          <BlogText $colorOrange $Size18 $marginTopAndBottom $pointer>@camping_car</BlogText>
          <BlogText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
            platea mauris at turpis. Volutpat, morbi sit vitae id. Aliquam
            eleifend aenean neque in in a quam vivamus
          </BlogText>
        </BlogsInfoWrapper>
        <BlogsImgWrapper>
          <img src={Blog1} alt="photo" />
          <img src={Blog2} alt="photo" />
          <img src={Blog3} alt="photo" />
          <img src={Blog4} alt="photo" />
          <img src={Blog5} alt="photo" />
          <img src={Blog6} alt="photo" />
        </BlogsImgWrapper>
      </BlogsContainer>
    </div>
  );
};

export default BlogsComponent;
