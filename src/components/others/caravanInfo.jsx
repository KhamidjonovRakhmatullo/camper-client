import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  CarBoxButtonWrapper2,
  CarInfoContainer,
  CompanyName,
  DividerWrapper,
  DocsWrapper,
  HeadTitle,
  ImageAndInfoContainer,
  ImageWrapper,
  ImgWrapper,
  InfoText,
  InfoTitle,
  InfoWrapper,
  InfoWrapper2,
  NameAndPriceWrapper,
  NameOfCar,
  OtherInfosContainer,
  OtherInfosWrapper,
  TransParentButton,
  WhiteButton,
} from "../../styles/carInfoStyle";
import comfort1 from "../assets/comfort.png";
import tidying1 from "../assets/tidying.png";
import ventilated1 from "../assets/ventilated.png";
import heating1 from "../assets/heating.png";
import { CarBoxButton, MotorBgImage } from "../../styles/motorStyled";
import TabsComponent from "./TabFile/tab";
import { caravan } from "../mock/caravandata";
import img111 from '../assets/campCarOboi-12.jpg'

const CarvanInfoComponent = () => {
  let { id } = useParams();
  console.log("userId:", id);
  const resultData = caravan.maindata.find(
    (value) => value.id === parseInt(id)
  );
  console.log("id Info:", resultData);

  return (
    <CarInfoContainer>
       <MotorBgImage  style={{backgroundImage: `url(${img111})`}}>
        <HeadTitle>
          {resultData.caravan.name}
        </HeadTitle>
        <CarBoxButtonWrapper2 $MaxWidth>
        <Link to={`cart`} style={{textDecoration: "none", width: "100%"}}>
              <TransParentButton>ADD TO CART</TransParentButton>
        </Link>
              <TransParentButton>COMPARE</TransParentButton>
            </CarBoxButtonWrapper2>
      </MotorBgImage>
      <div style={{padding: '30px 0px 0px 0px'}}>
      <ImageAndInfoContainer $AlignCenter>
        <InfoWrapper2>
        <ImageWrapper>
          <img src={resultData.caravan.image || "Data not found"} alt="car image" />
        </ImageWrapper>
        </InfoWrapper2>
        <InfoWrapper2>
        <InfoWrapper>
          <NameAndPriceWrapper>
            <div>
              <NameOfCar $MarginBottom10px>
                {resultData.caravan.name || "Data not found"}
              </NameOfCar>
              <div>{resultData.caravan.type || "Data not found"}</div>
            </div>
            <NameOfCar $ColorBlue $Size30px>
              {resultData.caravan.price || "Data not found"}
            </NameOfCar>
          </NameAndPriceWrapper>
          <DividerWrapper></DividerWrapper>
          <OtherInfosContainer>
            <OtherInfosWrapper>
              <CompanyName $Color000 $ Size18px>
                Company
              </CompanyName>
              <CompanyName $Color000 $ Size18px>
                People
              </CompanyName>
              <CompanyName $Color000 $ Size18px>
                License type
              </CompanyName>
            </OtherInfosWrapper>

            <OtherInfosWrapper>
              <CompanyName>{resultData.caravan.company}</CompanyName>
              <CompanyName>{resultData.caravan.people}</CompanyName>
              <CompanyName>{resultData.caravan.license}</CompanyName>
            </OtherInfosWrapper>
          </OtherInfosContainer>
        </InfoWrapper>
        </InfoWrapper2>
      </ImageAndInfoContainer>

      <div style={{ marginTop: "70px" }}>
        <ImageAndInfoContainer>
          <DocsWrapper>
            <InfoTitle>Comfort</InfoTitle>
            <InfoText>{resultData.docs.comfort}</InfoText>
          </DocsWrapper>
          <ImgWrapper>
            <img src={comfort1} alt="img" />
          </ImgWrapper>
          <DocsWrapper $hideORshow>
            <InfoTitle>Comfort</InfoTitle>
            <InfoText>{resultData.docs.comfort}</InfoText>
          </DocsWrapper>
        </ImageAndInfoContainer>

        <ImageAndInfoContainer>
          <ImgWrapper>
            <img src={tidying1} alt="img" />
          </ImgWrapper>
          <DocsWrapper>
            <InfoTitle>Tidying away is child’s play!</InfoTitle>
            <InfoText>{resultData.docs.tidying}</InfoText>
          </DocsWrapper>
          <DocsWrapper $hideORshow>
            <InfoTitle>Tidying away is child’s play!</InfoTitle>
            <InfoText>{resultData.docs.tidying}</InfoText>
          </DocsWrapper>
        </ImageAndInfoContainer>

        <ImageAndInfoContainer>
          <DocsWrapper>
            <InfoTitle>Ventilated , Lit up</InfoTitle>
            <InfoText>{resultData.docs.comfort}</InfoText>
          </DocsWrapper>
          <ImgWrapper>
            <img src={ventilated1} alt="img" />
          </ImgWrapper>
          <DocsWrapper $hideORshow>
            <InfoTitle>Ventilated , Lit up</InfoTitle>
            <InfoText>{resultData.docs.comfort}</InfoText>
          </DocsWrapper>
        </ImageAndInfoContainer>

        <ImageAndInfoContainer>
          <ImgWrapper>
            <img src={comfort1} alt="img" />
          </ImgWrapper>
          <DocsWrapper>
            <InfoTitle>Tidying away is child’s play!</InfoTitle>
            <InfoText>{resultData.docs.tidying}</InfoText>
          </DocsWrapper>
          <DocsWrapper $hideORshow>
            <InfoTitle>Easy access</InfoTitle>
            <InfoText>{resultData.docs.access}</InfoText>
          </DocsWrapper>
        </ImageAndInfoContainer>

        <ImageAndInfoContainer>
          <DocsWrapper>
            <InfoTitle>Heating when driving</InfoTitle>
            <InfoText>{resultData.docs.heating}</InfoText>
            <CarBoxButtonWrapper2>
            <Link to={`cart`} style={{textDecoration: "none", width: "100%"}}>
              <WhiteButton>ADD TO CART</WhiteButton></Link>
              <WhiteButton>COMPARE</WhiteButton>
            </CarBoxButtonWrapper2>
          </DocsWrapper>
          <ImgWrapper>
            <img src={heating1} alt="img" />
          </ImgWrapper>
          <DocsWrapper $hideORshow>
            <InfoTitle>Heating when driving</InfoTitle>
            <InfoText>{resultData.docs.heating}</InfoText>
            <CarBoxButtonWrapper2>
            <Link to={`cart`} style={{textDecoration: "none", width: "100%"}}>
              <WhiteButton>ADD TO CART</WhiteButton></Link>
              <WhiteButton>COMPARE</WhiteButton>
            </CarBoxButtonWrapper2>
          </DocsWrapper>
        </ImageAndInfoContainer>
      </div>
      </div>
      <TabsComponent></TabsComponent>
    </CarInfoContainer>
  );
};

export default CarvanInfoComponent;
