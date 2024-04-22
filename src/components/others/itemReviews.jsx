import React from "react";
import { CarSortNavbarLeft, CostTitle } from "../../styles/motorStyled";
import { campcar } from "../mock/mockdata";
import { CompanyName, DividerWrapper, NameOfCar } from "../../styles/carInfoStyle";

const ItemReviewsComponent = () => {
  const data = campcar.maindata;
  console.log("data is:", data);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "45px 70px 0px 70px",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <CostTitle>Premium Review</CostTitle>
          <CostTitle $colorBlue>{data.length}</CostTitle>
        </div>
        <div>Select button</div>
      </div>
      {data.map((value, key) => {
        return (
            <div>
          <div key={key} style={{display: "flex", justifyContent: "space-between", padding: "70px", height: "150px", marginTop: "36px"}}>
            <div style={{display: "flex", alignItems: "center"}}>
            <div>
              <div>
                <img src={value.car.photo} alt="" style={{maxWidth: "195px"}}/>
              </div>
            </div>
            <div>
              <NameOfCar>{value.car.name}</NameOfCar>
              <CompanyName>{value.car.company}</CompanyName>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sapiente.
            </div>
            </div>
            

            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <CompanyName $Color000 $ Size18px>ID:{value.id}</CompanyName>
                <CompanyName $Color000 $ Size18px>Data:{value.car.date}</CompanyName>
                <CompanyName $Color000 $ Size18px>Rate:{value.car.rate}</CompanyName>
            </div>
          </div>
          <DividerWrapper></DividerWrapper>
          </div>

        );
      })}
    </div>
  );
};

export default ItemReviewsComponent;
