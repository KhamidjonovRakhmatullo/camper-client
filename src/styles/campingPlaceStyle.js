import styled from "styled-components";

export const CampingPlaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
`;
export const CampingPlaceBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  /* border: 1px solid red; */
  padding: 60px 10% 60px 10%;

  @media only screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    padding: "0px 70px";
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const CampingPlaceBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  /* border: 1px solid black; */
  transition: 0.3s;
  &:hover {
    background-color: #fafafa;
    transform: scale(1.05);
    transition: 0.5s ease;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  }
`;

export const CampingPlaceImgWrappper = styled.div`
  flex: 1;
  /* border: 1px solid blue; */
  width: 100%;
  img {
    width: 100%;
    max-width: 395px;
    max-height: 300px;
    border-radius: 10px;
    /* &:hover{
      color: linear-gradient(to right,rgba(255,255,255,0) 0%,rgba(255,255,255,.3) 100%);
    transform: skewX(-25deg);
    } */
  }
`;

export const CampingPlaceInfoWrappper = styled.div`
  flex: 1;
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 15px 0px 10px 10px;
`;
export const CampingPlaceName = styled.div`
  color: var(--text, #373737);
  font-family: Montserrat;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const CampingPlaceLocation = styled.div`
  color: var(--text, #373737);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CampPlaceInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  
`

export const CampPlaceInfoContainer2 = styled.div`
  padding: 0px 10% 0px 10%;
`;


export const CampPlaceImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
  /* border: 1px solid blue; */
  margin-right: 10px;
  img {
    width: 100%;
    max-width: 194px;
    height: 147px;
    border-radius: 10px;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      url(<path-to-image>) lightgray 50% / cover no-repeat;
  }
`;

export const CampPlaceName =styled.div`
color: #000;
font-family: Montserrat;
font-size: 25px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin: 20px 0px 10px 0px;
`
export const CampPlaceLocation =styled.div`
color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
display: flex;
align-items: center;
justify-content: start;
gap: 20px;
`

export const LocationInfosContainer =styled.div`
display: flex;
/* border: 1px solid red; */
color: var(--text, #373737);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
@media only screen and (max-width: 400px) {
  flex-direction: column;
  gap: 17px;
  }
`
export const LocationInfo =styled.div`
display: flex;
justify-content: start;
align-items: center;
/* border: 1px solid blue; */
gap: 10px;
`
export const LocationInfoLeft =styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: start;
/* border: 1px solid black; */
gap: 17px;
`

export const LocationInfoRight =styled.div`
flex: 4;
display: flex;
flex-direction: column;
align-items: start;
/* border: 1px solid green; */
gap: 17px;
@media only screen and (max-width: 1024px) {
  flex: 2;
  }
  @media only screen and (max-width: 700px) {
  flex: 1;
  }
`

export const DescriptionWrapper =styled.div`
display: flex;
flex-direction: column;
align-items: start;
/* border: 1px solid yellow; */
gap: 10px;
margin-top: 22px;

color: var(--text, #373737);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
h3{
  color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
`

export const MapWrapper1 =styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 522px;
margin-top: 50px;
margin-bottom: 80px;
@media only screen and (max-width: 700px) {
    height: 322px;
  }
`

