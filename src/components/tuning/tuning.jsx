import React, { useState } from 'react'
import { Border, CarSortNavbar, CarSortNavbarLeft, CarSortNavbarLeft_ItemAndButtons, CarSortNavbarRight, ColumnButton, CostText, CostTitle, GridButton, GridColumnButtonWrapper, MotorBgImage, MotorMainContainer, Price, SidebarAndCarBoxesContainer, StyledSelect } from '../../styles/motorStyled'
import ColumnCarBoxComponent from './columnCarBox'
import listColumn1 from '../assets/listColumn.svg'
import listGrid1 from '../assets/listGrid.svg'
import { campcar } from '../mock/mockdata'
import GridCarBoxComponent from './gridCarBox'
import CostComponent from './sideBar'
import tuningBg from '../assets/mainBg.png'

const TuningComponent = () => {
  const data = campcar.maindata.slice(-12);
   const [active, setActive] = useState(true)

   const handleGridClicked = () =>{
    setActive(true)

   }

   const handleColumnClicked = () =>{
    setActive(false)

   }

  return (
    <MotorMainContainer>
       <MotorBgImage style={{backgroundImage: `url(${tuningBg})`}}>
        <CostText $fontSize $colorWhite>Home/Tuning</CostText>
        <CostTitle $fontSize27 $fontWeight700 $paddingTop style={{color: "#fff"}} >Our Ranges</CostTitle>
        <Price $fontSize80 $colorWhiteH1>Tuning</Price>
       </MotorBgImage>
       <SidebarAndCarBoxesContainer>
        <div>
            <CostComponent></CostComponent>
        </div>

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
          <CostText $fontSize>Sort by</CostText>
          < StyledSelect $padding>
            <option>Select</option>
            <option>bb</option>
            <option>cc</option>
          </ StyledSelect>
          < StyledSelect>
            <option>60</option>
            <option>22</option>
            <option>33</option>
          </ StyledSelect>
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

            { active ?   <GridCarBoxComponent/> : <ColumnCarBoxComponent/>}
        </div>
       </SidebarAndCarBoxesContainer>
    </MotorMainContainer>
    
  )
}

export default TuningComponent