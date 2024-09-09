import React, { useEffect, useState } from "react";
import {
  BrandName,
  CarBox,
  CarBoxButton,
  CarBoxButtonWrapper,
  CarBoxContainer,
  CarBoxImage,
  CarBoxInfo,
  CarBoxRateWrapper,
  CostText,
  Price,
} from "../../styles/motorStyled";
import star1 from "../assets/carStar.svg";
import { Link } from "react-router-dom";
import axios from 'axios'
import img2 from "../assets/img-8.png";

const GridCarBoxComponent = () => {

  const [dataList, setDataList] = useState([])
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5050/api/motor");
      setDataList(response.data);
    } catch (error) {
      console.log("Fetch data is NOT successfull", error);
    }
  };
  return (

    <div style={{display: 'flex', justifyContent: "center", alignItems: 'center'}}>
      <CarBoxContainer>
        {dataList.map((value, key) => {
          return (
            <Link to={`${value._id}`} style={{textDecoration: "none"}}>
              <CarBox $maxWidth key={key}>
                <CarBoxImage $hight150px>
                  <img
                    src={img2}
                    alt="no photo1"
                    style={{ width: "100%" }}
                  />
                </CarBoxImage>
                <CarBoxInfo>
                  <CostText $fontSize $fontWeight>
                    {value.name || "no data"}
                  </CostText>
                  <BrandName>
                    {value.company || "no data"}
                    <CarBoxRateWrapper>
                      <p> {value.rate || "no data"}</p>
                      <img src={star1} alt="starIcon" />
                    </CarBoxRateWrapper>
                  </BrandName>
                  <Price>{value.cost || "no data"}</Price>
                  <CarBoxButtonWrapper>
                    <CarBoxButton>ORDER</CarBoxButton>
                    <CarBoxButton $paddingRwnL>COMPARE</CarBoxButton>
                  </CarBoxButtonWrapper>
                </CarBoxInfo>
              </CarBox>
              </Link>
          );
        })}
      </CarBoxContainer>
    </div>
  );
};

export default GridCarBoxComponent;
