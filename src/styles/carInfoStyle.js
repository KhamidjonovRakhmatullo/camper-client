import styled from "styled-components";

export const CarInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
`;

export const HeadTitle = styled.div`
color: #FFF;
text-align: center;
font-family: Montserrat;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
width: 100%;
`
export const ImageAndInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  /* gap: 20px; */
  margin-top: "";
  @media only screen and (max-width: 1400px) {
    flex-direction: column;
    align-items: ${(props) => (props.$AlignCenter ? `center` : `start`)};
    padding: 0px 80px;
  }
  @media only screen and (max-width: 790px) {
    padding: 0px 30px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  /* border: 1px solid blue; */
  img {
    width: 626px;
    height: 381px;
  }
  @media only screen and (max-width: 1400px) {
    img {
      margin-bottom: 35px;
      width: 626px;
      height: 381px;
      /* width: 100%;
      height: 100%; */
    }
  }
  @media only screen and (max-width: 790px) {
    img {
      margin-bottom: 35px;
      width: 354px;
      height: 224px;
    }
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid black; */
  width: 600px;
  height: 360px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 30px 25px 0px 25px;
  @media only screen and (max-width: 1400px) {
    width: 100%;
  }
`;

export const NameAndPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  /* border: 1px solid blue; */
  width: 100%;
  padding-right: 30px;
  @media only screen and (max-width: 1400px) {
    padding-right: 0px;
  }
`;

export const OtherInfosContainer = styled.div`
  display: flex;
  width: 100%;
  /* margin-top: 15px; */
`;

export const OtherInfosWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  /* border: 1px solid green; */
  gap: 10px;
`;

export const NameOfCar = styled.p`
  color: ${(props) => (props.$ColorBlue ? `#006DAB` : `#000`)};
  font-family: Montserrat;
  font-size: ${(props) => (props.$Size30px ? `30px` : `25px`)};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: ${(props) => (props.$MarginBottom10px ? `10px` : ``)};
  @media only screen and (max-width: 790px) {
    font-size: ${(props) => (props.$Size30px ? `25px` : `22px`)};
  }
`;

export const CompanyName = styled.p`
  color: ${(props) => (props.$Color000 ? `#000` : `rgba(55, 55, 55, 0.80)`)};
  font-family: Montserrat;
  font-size: ${(props) => (props.$Size18px ? `18px` : `16px`)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const DividerWrapper = styled.div`
  width: 240px;
  width: 100%;
  height: 1px;
  background: rgba(55, 55, 55, 0.3);
  margin: 10px 0px 15px 0px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 10;
  /* border: 1px solid blue; */
  width: 100%;
  @media only screen and (max-width: 1400px) {
    img {
      width: 100%;
      border-radius: 10px;
      margin-bottom: 20px;
    }
  }
`;

export const DocsWrapper = styled.div`
  flex: 10;
  display: ${(props) => (props.$hideORshow ? `none` : `flex`)};
  flex-direction: column;
  align-items: start;
  /* border: 1px solid red; */
  padding: 70px 70px 0px 70px;
  max-width: 683px;
  gap: 20px;
  /* border: "2px solid blue"; */
  @media only screen and (max-width: 1400px) {
    display: ${(props) => (props.$hideORshow ? `flex` : `none`)};
    padding: 0px 0px 80px 0px;
    max-width: 533px;
  }
`;

export const InfoTitle = styled.div`
  color: var(--text, #373737);
  font-family: Montserrat;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const InfoText = styled.div`
  color: #373737;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

export const CarBoxButtonWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: ${(props)=> props.$MaxWidth ? `30%` : `70%`};
  margin-top: 50px;
  button{
  /* max-width: ${(props)=> props.$MaxWidth ? `181px` : ``};
  max-height: ${(props)=> props.$MaxWidth ? `50px` : ``}; */
}
  @media only screen and (max-width: 790px) {
    width: ${(props)=> props.$MaxWidth ? `80%` : `100%`};

  }
`;

export const TabContainer=styled.div`
background-Color: rgba(0, 109, 171, 0.20);
height: 60px;
padding-Left: 70px;
display: flex;
@media only screen and (max-width: 600px) {
   padding-left: 30px ;

  }
`

export const FAQConrainer =styled.div`
display: flex;
gap: 50px;
padding: 24px 54px;
@media only screen and (max-width: 1000px) {
   display: flex;
   flex-direction: column;
   padding: 24px 14px;

  }
`

export const AskedQuestionsWrapper =styled.div`
flex: 2;
display: flex;
flex-direction: column;
gap: 20px;
`
export const SendQuestionWrapper =styled.div`
flex: 1.2;
display: flex;
flex-direction: column;
`
export const InputWrapper =styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid blue;
width: 100%;
padding: 30px;
border-radius: 10px;
border: 1px solid rgba(0, 109, 171, 0.10);
background-color: #ffff;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
gap: 20px;
h1{
  color: var(--text-color, #023047);
font-family: Montserrat;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 130%; /* 31.2px */
}
`

export const MapWrapper =styled.div`
flex: 2;
display: flex;
flex-direction: column;
gap: 20px;
img{
  width: 100%;
}
`

export const NumberAndEmailWrapper =styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 33px;
@media only screen and (max-width: 600px) {
   display: flex;
   flex-direction: column;
  }
`
export const NumberWrapper =styled.div`
flex: 1;
display: flex;
flex-direction: column;
background-color: #ffff;
height: 109px;
width: 100%;
border-radius: 8px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
padding: 15px 0px 44px 25px;
p{
  color: var(--txt-color, #1E1C1C);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 130%; /* 23.4px */
}
`

export const GrayText =styled.div`
margin-bottom: ${(props)=> props.$MarginBottom ? `10px` : ``};
color: #666;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 130%; /* 18.2px */
`
