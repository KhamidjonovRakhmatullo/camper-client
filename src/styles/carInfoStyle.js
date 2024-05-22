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
  flex: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  /* border: 1px solid blue; */
  img {
  width: 100%;
   max-width: 626px;
   max-height: 381px;
  }
  @media only screen and (max-width: 1400px) {
      margin-bottom: 35px;
  }
`;

export const InfoWrapper2 =styled.div`
flex: 10;
display: flex;
justify-content: start;
align-items: center;
@media only screen and (max-width: 1400px) {
    width: 100%;
justify-content: center;

  }
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
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
  @media only screen and (max-width: 450px) {
    font-size: ${(props) => (props.$Size30px ? `20px` : `17px`)};
  }
  
`;

export const CompanyName = styled.p`
  color: ${(props) => (props.$Color000 ? `#000` : `rgba(55, 55, 55, 0.80)`)};
  font-family: Montserrat;
  font-size: ${(props) => (props.$Size18px ? `18px` : `16px`)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: ${(props) => props.$marginTnB ? `5px 0px 15px 0px` : ``};
  
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
  padding: 0px 70px 70px 70px;
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
  width: ${(props)=> props.$MaxWidth ? `40%` : `100%`};
  margin-top: 50px;
  button{
  /* max-width: ${(props)=> props.$MaxWidth ? `181px` : ``};
  max-height: ${(props)=> props.$MaxWidth ? `50px` : ``}; */
}
  @media only screen and (max-width: 790px) {
    width: ${(props)=> props.$MaxWidth ? `80%` : `100%`};

  }
`;


export const TransParentButton =styled.button`
  width: 100%;
  padding: 14px 5%;
  border-radius: 10px;
  background-color: transparent;
  border: 2px solid white;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);

  color: #fff;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
  cursor: pointer;
  &:hover {
    background-color: #006dab;
    color: #fff;
    border: 2px solid #006dab;
  }
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`

export const WhiteButton =styled.button`
  width: 100%;
  padding: ${(props) => props.$Padding ? `12px 1%` : `14px 4%`};
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid var(--blue, #006dab);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);

  color: #006DAB;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
  cursor: pointer;
  &:hover {
    background-color: #006dab;
    color: #fff;
    border: 1px solid #006dab;
  }
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`


export const TabContainer=styled.div`
background-Color: rgba(0, 109, 171, 0.20);
height: 60px;
padding-Left: 70px;
display: flex;
@media only screen and (max-width: 600px) {
   padding-left: 30px ;

  }
`
export const ItemReviewsContainer =styled.div`
/* border: 1px solid black; */
width: 100%;
max-width: 1366px;
/* padding: 0px 54px; */
@media only screen and (max-width: 836px) {
    padding: 0px 14px;
  }
`

export const ItemReviewsAndSelect =styled.div`
display: flex;
justify-content: space-between;
align-items: center;
/* border: 1px solid red; */
margin-bottom: 30px;
gap: 15px;
`

export const ItemReviewsCarBox =styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px;
@media only screen and ( max-width: 836px) {
  flex-direction: column;
 }
`

export const ItemReviewsCarBoxImage =styled.div`
/* flex: 1; */
/* width: 100%; */
max-width: 350px;
@media only screen and ( max-width: 836px) {
  width: 100%;
 }
`

export const ItemReviewsCarBoxLeft =styled.div`
display: flex;
align-items: center;
gap: 10px;
flex: 1;
/* border: 1px solid red; */
img{
    width: 100%;
    max-width: 195px;
  }
@media only screen and ( max-width: 836px) {
  flex-direction: column;
  img{
    width: 100%;
    max-width: 350px;
  }
 }
`

export const ItemReviewsCarBoxRight =styled.div`
display: flex;
flex-direction: column;
/* border: 1px solid blue; */
gap: 14px;
@media only screen and ( max-width: 836px) {
 display: flex;
 flex-direction: unset;
 justify-content: space-between;
 width: 100%;
 max-width: 515px;
 margin-top: 20px;

 }
`

export const FAQConrainer =styled.div`
display: flex;
gap: 50px;
width: 100%;
max-width: 1366px;
padding: 24px 0px;
@media only screen and (max-width: 1000px) {
   display: flex;
   flex-direction: column;
   padding: 24px 14px;

  }
`

export const QnAWrapper =styled.div`
display: flex;
flex-direction: column;
/* border: 1px solid blue; */
margin-top: ${(props)=> props.$marginTop37 ? `37px` : `10px`};
p{
  color: rgba(55, 55, 55, 0.50);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-bottom: 5px;
margin-left: 20px;
}
h3{
  color: #373737;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-left: 20px;
}
`

export const AskedQuestionsWrapper =styled.div`
flex: 2;
display: flex;
flex-direction: column;
gap: 20px;
`
export const AnswerQuestionsWrapper =styled.div`
flex: 2;
display: flex;
flex-direction: column;
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
/* border: 1px solid blue; */
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
width: 100%;
`
export const MapWrapper1 =styled.div`
width: 100%;
height: 359px;
/* border: 1px solid red; */
@media only screen and (max-width: 600px) {
   height: 250px;
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
