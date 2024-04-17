import React, { useState } from 'react'
import { Border, CarSortNavbar, CarSortNavbarLeft, CarSortNavbarLeft_ItemAndButtons, CarSortNavbarRight, ColumnButton, CostText, CostTitle, GridButton, GridColumnButtonWrapper, MotorBgImage, MotorMainContainer, Price, SidebarAndCarBoxesContainer, StyledSelect } from '../../styles/motorStyled'
import CostComponent from './SideBar'
import GridCarBoxComponent from './gridCarBox'
import listColumn1 from '../assets/listColumn.svg'
import listGrid1 from '../assets/listGrid.svg'
import { caravan } from '../mock/caravandata'
import ColumnCarBoxComponent from './columnCarBox'
import usedCarBg from '../assets/mainBg2.png'

const UsedCarComponent = () => {
  const data = caravan.maindata
  console.log ("data is:", data)
  const [active, setActive] = useState(true)
  const handleGridClicked = ()=> {
    setActive(true)
  }
  const handleColumnClicked = ()=> {
    setActive(false)
  }
  return (
    <MotorMainContainer>
      <MotorBgImage style={{backgroundImage: `url(${usedCarBg})`}}>
          <CostText $fontSize $colorWhite>Home/UsedCar</CostText>
          <CostTitle $fontSize27 $fontWeight700 $paddingTop style={{color: "#fff"}} >Our Ranges</CostTitle>
          <Price $fontSize80 $colorWhiteH1>Used Car</Price>
      </MotorBgImage>

      <SidebarAndCarBoxesContainer>

      <CostComponent></CostComponent>
  <div style={{width: "100%"}}>
    <div>
      <CarSortNavbar>
      <CarSortNavbarLeft_ItemAndButtons>
        <CarSortNavbarLeft>
        <CostTitle>
            Items
        </CostTitle>
        <CostTitle $colorBlue>{data.length}</CostTitle>
        </CarSortNavbarLeft>

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
          <CostText>Sort by</CostText>
          <StyledSelect>
            <option>Select</option>
            <option>aa</option>
            <option>bb</option>
          </StyledSelect>
          <StyledSelect>
            <option>60</option>
            <option>33</option>
            <option>22</option>
          </StyledSelect>
          <GridColumnButtonWrapper >
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
     {
      active ? <GridCarBoxComponent/> : <ColumnCarBoxComponent/>
     }
    </div>
      </SidebarAndCarBoxesContainer>

    </MotorMainContainer>
  )
}

export default UsedCarComponent