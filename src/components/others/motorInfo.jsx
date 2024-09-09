import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
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
import { MotorBgImage } from "../../styles/motorStyled";
import TabsComponent from "./TabFile/tab";
import img111 from '../assets/campCarOboi-5.jpg';

const MotorInfoComponent = () => {
  const [motor, setMotor] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMotorData = async () => {
      try {
        const response = await axios.get(`http://localhost:5050/api/motor/${id}`);
        setMotor(response.data);
      } catch (error) {
        console.error("Error fetching motor data:", error);
      }
    };

    fetchMotorData();
  }, [id]);

  if (!motor) {
    return <div>Loading...</div>; // Add loading spinner or message
  }

  return (
    <CarInfoContainer>
      <MotorBgImage style={{ backgroundImage: `url(${img111})` }}>
        <HeadTitle>{motor.name}</HeadTitle>
        <CarBoxButtonWrapper2 $MaxWidth>
          <Link to="cart" style={{ textDecoration: "none", width: "100%" }}>
            <TransParentButton>ADD TO CART</TransParentButton>
          </Link>
          <TransParentButton>COMPARE</TransParentButton>
        </CarBoxButtonWrapper2>
      </MotorBgImage>
      <div style={{ padding: '30px 0px 0px 0px' }}>
        <ImageAndInfoContainer $AlignCenter>
          <InfoWrapper2>
            <ImageWrapper>
              <img src={motor.photo || "Data not found"} alt="car image11" />
            </ImageWrapper>
          </InfoWrapper2>
          <InfoWrapper2>
            <InfoWrapper>
              <NameAndPriceWrapper>
                <div>
                  <NameOfCar $MarginBottom10px>{motor.name || "Data not found"}</NameOfCar>
                  <div>{motor.type || "Data not found"}</div>
                </div>
                <NameOfCar $ColorBlue $Size30px>{motor.cost || "Data not found"}</NameOfCar>
              </NameAndPriceWrapper>
              <DividerWrapper />
              <OtherInfosContainer>
                <OtherInfosWrapper>
                  <CompanyName $Color000 $Size18px>Company</CompanyName>
                  <CompanyName $Color000 $Size18px>People</CompanyName>
                  <CompanyName $Color000 $Size18px>License type</CompanyName>
                </OtherInfosWrapper>
                <OtherInfosWrapper>
                  <CompanyName>{motor.company}</CompanyName>
                  <CompanyName>{motor.people}</CompanyName>
                  <CompanyName>{motor.license}</CompanyName>
                </OtherInfosWrapper>
              </OtherInfosContainer>
            </InfoWrapper>
          </InfoWrapper2>
        </ImageAndInfoContainer>
        <div style={{ marginTop: "70px" }}>
          <ImageAndInfoContainer>
            <DocsWrapper>
              <InfoTitle>Comfort</InfoTitle>
              <InfoText>{motor.docs?.comfort || "Data not found"}</InfoText>
            </DocsWrapper>
            <ImgWrapper>
              <img src={comfort1} alt="Comfort" />
            </ImgWrapper>
          </ImageAndInfoContainer>
          <ImageAndInfoContainer>
            <ImgWrapper>
              <img src={tidying1} alt="Tidying" />
            </ImgWrapper>
            <DocsWrapper>
              <InfoTitle>Tidying away is child’s play!</InfoTitle>
              <InfoText>{motor.docs?.tidying || "Data not found"}</InfoText>
            </DocsWrapper>
          </ImageAndInfoContainer>
          <ImageAndInfoContainer>
            <DocsWrapper>
              <InfoTitle>Ventilated, Lit up</InfoTitle>
              <InfoText>{motor.docs?.ventilated || "Data not found"}</InfoText>
            </DocsWrapper>
            <ImgWrapper>
              <img src={ventilated1} alt="Ventilated" />
            </ImgWrapper>
          </ImageAndInfoContainer>
          <ImageAndInfoContainer>
            <ImgWrapper>
              <img src={comfort1} alt="Comfort" />
            </ImgWrapper>
            <DocsWrapper>
              <InfoTitle>Easy access</InfoTitle>
              <InfoText>{motor.docs?.access || "Data not found"}</InfoText>
            </DocsWrapper>
          </ImageAndInfoContainer>
          <ImageAndInfoContainer>
            <DocsWrapper>
              <InfoTitle>Heating when driving</InfoTitle>
              <InfoText>{motor.docs?.heating || "Data not found"}</InfoText>
              <CarBoxButtonWrapper2>
                <Link to="cart" style={{ textDecoration: "none", width: "100%" }}>
                  <WhiteButton>ADD TO CART</WhiteButton>
                </Link>
                <WhiteButton>COMPARE</WhiteButton>
              </CarBoxButtonWrapper2>
            </DocsWrapper>
            <ImgWrapper>
              <img src={heating1} alt="Heating" />
            </ImgWrapper>
          </ImageAndInfoContainer>
        </div>
      </div>
      <TabsComponent />
    </CarInfoContainer>
  );
};

export default MotorInfoComponent;
