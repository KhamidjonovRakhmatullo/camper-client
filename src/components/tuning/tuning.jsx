import React, { useState } from "react";
import {
  Border,
  CarSortButton,
  CarSortNavbar,
  CarSortNavbarLeft,
  CarSortNavbarLeft_ItemAndButtons,
  CarSortNavbarRight,
  ColumnButton,
  CostOfCarContainerHide,
  CostText,
  CostTitle,
  GridButton,
  GridColumnButtonWrapper,
  MotorBgImage,
  MotorMainContainer,
  Price,
  SidebarAndCarBoxesContainer,
  SidebarItemNumberTablet,
  SortByWrapper,
  StyledSelect,
} from "../../styles/motorStyled";
import ColumnCarBoxComponent from "./columnCarBox";
import listColumn1 from "../assets/listColumn.svg";
import listGrid1 from "../assets/listGrid.svg";
import { campcar } from "../mock/mockdata";
import GridCarBoxComponent from "./gridCarBox";
import SortButton from "./pages/sortButton";
import SideBarComponent from "./sideBar";
import tuningBg from "../assets/campCarOboi-5.jpg";

const MotorComponent = () => {
  const data = campcar.maindata.slice(-12);

  const [active, setActive] = useState(true);

  const handleGridClicked = () => {
    setActive(true);
  };

  const handleColumnClicked = () => {
    setActive(false);
  };

  return (
    <MotorMainContainer>
      <MotorBgImage style={{ backgroundImage: `url(${tuningBg})` }}>
        <CostText $fontSize $colorWhite>
          Home/Tuning
        </CostText>
        <CostTitle
          $fontSize27
          $fontWeight700
          $paddingTop
          style={{ color: "#fff" }}
        >
          Our Ranges
        </CostTitle>
        <Price $fontSize80 $colorWhiteH1>
          Tuning
        </Price>
      </MotorBgImage>
      {/* all of components which are under the Main background image */}
      <SidebarAndCarBoxesContainer>
        {/* its only sidebar wrapper */}
        <CostOfCarContainerHide>
          <SideBarComponent></SideBarComponent>
        </CostOfCarContainerHide>
        {/* sort navbar, grid and column wrapper */}
        <div  style={{width: "100%", maxWidth: "1250px"}}>
          {/* sortnavbar and its underline */}
          <div>
            <CarSortNavbar>
              <CarSortNavbarLeft_ItemAndButtons>
                {/* this shows from tablet */}
                <SidebarItemNumberTablet>
                  <CarSortButton>
                    <SortButton></SortButton>
                  </CarSortButton>
                  <CarSortNavbarLeft>
                    <CostTitle>Items</CostTitle>
                    <CostTitle $colorBlue>{data.length}</CostTitle>
                  </CarSortNavbarLeft>
                </SidebarItemNumberTablet>

                <GridColumnButtonWrapper $hide>
                  <GridButton onClick={handleGridClicked}>
                    <img src={listGrid1} alt="img" />
                  </GridButton>
                  <ColumnButton onClick={handleColumnClicked}>
                    <img src={listColumn1} alt="img" />
                  </ColumnButton>
                </GridColumnButtonWrapper>
              </CarSortNavbarLeft_ItemAndButtons>

              <CarSortNavbarRight>
                <SortByWrapper>
                  <CostText $fontSize>Sort by</CostText>
                  <StyledSelect $padding>
                    <option>Select</option>
                    <option>bb</option>
                    <option>cc</option>
                  </StyledSelect>
                  <StyledSelect>
                    <option>60</option>
                    <option>22</option>
                    <option>33</option>
                  </StyledSelect>
                </SortByWrapper>

                <GridColumnButtonWrapper>
                  <GridButton onClick={handleGridClicked}>
                    <img src={listGrid1} alt="img" />
                  </GridButton>
                  <ColumnButton onClick={handleColumnClicked}>
                    <img src={listColumn1} alt="img" />
                  </ColumnButton>
                </GridColumnButtonWrapper>
              </CarSortNavbarRight>
            </CarSortNavbar>
            <Border $width100 $margin0 $marginTop6></Border>
          </div>

          {active ? <GridCarBoxComponent /> : <ColumnCarBoxComponent />}
        </div>
      </SidebarAndCarBoxesContainer>
    </MotorMainContainer>
  );
};

export default MotorComponent;
