import styled from "styled-components";
import video1 from "../components/assets/video-1.png";

export const HomeCarousel = styled.div`
  /* background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat; */
  img {
    max-height: 600px;
  }
`;

export const HomeContainer = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  /* align-items: center; */ //impossible to use cause of the multi-carousel
  justify-content: center;
`;

export const HomeContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10%;
  @media only screen and (max-width: 1000px) {
    padding: 0px 80px;
  }
  @media only screen and (max-width: 600px) {
    padding: 0px 30px;
  }
`;

export const RecommendContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
justify-content: center; */
  /* padding: 0px 70px 0px 70px; */
  margin: 50px 0px 40px 0px;
  /* max-width: 1300px;
  margin: auto; */
`;

export const RecommendBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  /* :hover{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  } */
`;

export const RecommendImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  max-width: 290px;
  max-height: 167px;
  min-width: 290px;
  min-height: 167px;
  padding: 10px;

  img {
    max-width: 290px;
    max-height: 167px;
  }
  @media only screen and (max-width: 600px) {
    img {
    max-width: 220px;
    max-height: 100px;
  }
  }
`;

export const RecommendInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const RecommendBoxText = styled.div`
  color: var(--text, #373737);
  text-align: center;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

// export const RecommendBoxButton = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transform: skew(-20deg);
//   cursor: pointer;
//   border: none;
//   background-color: #006dab;
//   flex-shrink: 0;
//   width: 100%;
//   padding: 10px 34px;
// p{
//   color: #fff;
//   font-family: Montserrat;
//   font-size: 18px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: normal;
//   transform: skew(+20deg);

// }
// `;

export const VideoContainer = styled.div`
  /* padding: 0px 70px; */
  display: grid;
  grid-template-columns: auto auto auto auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  :hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    border-radius: 15px;
  }
  @media only screen and (max-width: 1000px) {
    grid-template-columns: auto auto;
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
  }
`;

export const ContainerTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  @media only screen and (max-width: 600px) {
    align-items: start;
  }
`;

export const ContainerTitle = styled.h2`
  color: var(--text, #373737);
  font-family: Gilroy;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const UnderLine = styled.div`
  background-color: #ff7a00;
  width: ${(props) => (props.$width170 ? `170px` : `90px`)};
  height: 2px;
`;

export const PopupVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 25px 30px 25px;
  width: 100%;
`;

export const PopupInsideTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px 0px 25px;
  h3 {
    color: #000;
    font-family: "Open Sans";
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    color: #000;
    font-family: "Open Sans";
    font-size: 33px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const VideoWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${video1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  img {
    width: 100%;
    cursor: pointer;
  }
`;

export const BlogsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  padding-bottom: 80px;
  @media only screen and (max-width: 1000px) {
    display: grid;
    grid-template-columns: auto;
  }
`;

export const BlogsInfoWrapper = styled.div`
  /* flex: 4; */
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding-right: 33px;
  h1 {
    color: #000;
    font-family: Montserrat;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const BlogText = styled.p`
  max-width: 400px;
  color: ${(props) => (props.$colorOrange ? `#FF7A00` : `#000`)};
  font-family: Montserrat;
  font-size: ${(props) => (props.$Size18 ? `18px` : `16px`)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: ${(props) => (props.$marginTopAndBottom ? `35px 0px 10px 0px` : ``)};
  cursor: ${(props) => (props.$pointer ? `pointer` : ``)};
`;

export const BlogsImgWrapper = styled.div`
  /* flex: 7; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 20px;
  :hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    border-radius: 15px;
  }
  img {
    width: 100%;
    max-width: 258px;
    max-height: 258px;
    cursor: pointer;
  }
  @media only screen and (max-width: 1000px) {
    grid-template-columns: auto auto;
    margin-top: 40px;
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
  }
`;
