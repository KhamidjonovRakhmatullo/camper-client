import React from "react";
import { useParams } from "react-router-dom";
import { campcar } from "../mock/mockdata";
import {
  CarBoxButtonWrapper2,
  CarInfoContainer,
  CompanyName,
  Divider,
  DividerWrapper,
  DocsWrapper,
  HeadTitle,
  ImageAndInfoContainer,
  ImageWrapper,
  ImgWrapper,
  InfoText,
  InfoTitle,
  InfoWrapper,
  NameAndPriceWrapper,
  NameOfCar,
  OtherInfosContainer,
  OtherInfosWrapper,
} from "../../styles/carInfoStyle";
import comfort1 from "../assets/comfort.png";
import tidying1 from "../assets/tidying.png";
import ventilated1 from "../assets/ventilated.png";
import heating1 from "../assets/heating.png";
import { CarBoxButton, MotorBgImage } from "../../styles/motorStyled";
import TabsComponent from "./tab";

const CarInfo = () => {
  let { id } = useParams();
  console.log("userId:", id);
  const resultData = campcar.maindata.find(
    (value) => value.id === parseInt(id)
  );
  console.log("id Info:", resultData);

  return (
    <CarInfoContainer>
       <MotorBgImage>
        <HeadTitle>
          {resultData.car.name}
        </HeadTitle>
        <CarBoxButtonWrapper2 $MaxWidth>
              <CarBoxButton>ADD TO CART</CarBoxButton>
              <CarBoxButton>COMPARE</CarBoxButton>
            </CarBoxButtonWrapper2>
      </MotorBgImage>
      <ImageAndInfoContainer $AlignCenter>
        <ImageWrapper>
          <img src={resultData.car.photo || "Data not found"} alt="car image" />
        </ImageWrapper>
        <InfoWrapper>
          <NameAndPriceWrapper>
            <div>
              <NameOfCar $MarginBottom10px>
                {resultData.car.name || "Data not found"}
              </NameOfCar>
              <div>{resultData.car.type || "Data not found"}</div>
            </div>
            <NameOfCar $ColorBlue $Size30px>
              {resultData.car.cost || "Data not found"}
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
              <CompanyName>{resultData.car.company}</CompanyName>
              <CompanyName>{resultData.car.people}</CompanyName>
              <CompanyName>{resultData.car.license}</CompanyName>
            </OtherInfosWrapper>
          </OtherInfosContainer>
        </InfoWrapper>
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
              <CarBoxButton>ADD TO CART</CarBoxButton>
              <CarBoxButton>COMPARE</CarBoxButton>
            </CarBoxButtonWrapper2>
          </DocsWrapper>
          <ImgWrapper>
            <img src={heating1} alt="img" />
          </ImgWrapper>
          <DocsWrapper $hideORshow>
            <InfoTitle>Heating when driving</InfoTitle>
            <InfoText>{resultData.docs.heating}</InfoText>
            <CarBoxButtonWrapper2>
              <CarBoxButton>ADD TO CART</CarBoxButton>
              <CarBoxButton>COMPARE</CarBoxButton>
            </CarBoxButtonWrapper2>
          </DocsWrapper>
        </ImageAndInfoContainer>
      </div>
      <TabsComponent></TabsComponent>
    </CarInfoContainer>
  );
};

export default CarInfo;
