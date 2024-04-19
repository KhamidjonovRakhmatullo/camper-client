import React from "react";
import { campcar } from "../mock/mockdata";
import { BrandName, CarBox, CarBoxButton, CarBoxButtonWrapper, CarBoxContainer, CarBoxImage, CarBoxInfo, CarBoxRateWrapper, CostText, Price } from "../../styles/motorStyled";
import star1 from '../assets/carStar.svg'

const GridCarBoxComponent = () => {
  const data = campcar.maindata;
  console.log("camp data:", data);
  return (
    <CarBoxContainer>
      {data.map((value, key) => { 
        return (
          <CarBox $maxWidth key={key}>
              <CarBoxImage>
                  <img src={value.car.photo || "no photo"} alt="no photo1"  style={{width: "100%"}}/>
              </CarBoxImage>
              <CarBoxInfo>
                  <CostText $fontSize $fontWeight>{value.car.name || "no data"}</CostText>
                  <BrandName>{value.car.company || "no data"}
                      <CarBoxRateWrapper>
                          <p> {value.car.rate || "no data"}</p>
                          <img src={star1} alt="starIcon" />
                      </CarBoxRateWrapper>
                  </BrandName>
                  <Price>{value.car.cost || "no data"}</Price>
                  <CarBoxButtonWrapper>
                       <CarBoxButton>ORDER</CarBoxButton>
                       <CarBoxButton $paddingRwnL>COMPARE</CarBoxButton>
                  </CarBoxButtonWrapper>
              </CarBoxInfo>
          </CarBox>
        ); 
      })}
    </CarBoxContainer>
  );
};

// {campcar.map((value, key) => {
//   return (
//     <RecommendBox key={key}>
//       <RecommendImgWrapper>
//         <img src={value.car.photo || "no photo"} alt="camping-car" />
//       </RecommendImgWrapper>
//       <RecommendInfoWrapper>
//       <RecommendBoxText>Name</RecommendBoxText>
//       <Box sx={{ "& button": { m: 1 } }}>
//         <Button
//           variant="contained"
//           size="medium"
//           sx={{ transform: "skew(-20deg)", borderRadius: "0px" }}
//         >
//           Discover the range
//         </Button>
//       </Box>
//       <div style={{ display: "flex", gap: "10px" }}>
//         <p>Choose a model</p>
//         <img src={gommet1} alt="icon" />
//       </div>
//     </RecommendInfoWrapper>
//     </RecommendBox>
//   );
// })}

export default GridCarBoxComponent;
