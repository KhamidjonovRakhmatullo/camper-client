import React, { useState } from "react";
import {
  Border,
  CarSortButton,
  CarSortNavbar,
  CarSortNavbarLeft,
  CarSortNavbarLeft_ItemAndButtons,
  CarSortNavbarRight,
  CostOfCarContainerHide,
  CostText,
  CostTitle,
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
import { campcar } from "../mock/mockdata";
import GridCarBoxComponent from "./gridCarBox";
import SortButton from "./pages/sortButton";
///sideBar

import {
  CompareBox,
  SearchButton,
  CostCarBoxWrapper,
  CostOfCarContainer,
  FromToBox,
} from "../../styles/motorStyled";
import { DispJustAlgn } from "../../styles/styled";
import compare22 from "../assets/compare2.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import tuningBg from "../assets/campCarOboi-5.jpg";

import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


const MotorComponent = () => {
  const data = campcar.maindata.slice(-12)
////grid and column
  const [active, setActive] = useState(true);

  const handleGridClicked = () => {
    setActive(true);
  };

  const handleColumnClicked = () => {
    setActive(false);
  };


///set active of grid and column buttons
const [view, setView] = React.useState('list');

const handleChange = (event, nextView) => {
  setView(nextView);
};


///////////////////////////////
////sidebar
 const [selectedLabel, setSelectedLabel] = useState([])

 const handleCheckBoxChange = (labelName) => {
  const isSelected = selectedLabel.includes(labelName)
  setSelectedLabel(
    isSelected 
    ? selectedLabel.filter((itsName) => itsName !== labelName)
    : [...selectedLabel, labelName]
  )
 }

 const filteredData = data.filter(
  (item) => 
  selectedLabel.length === 0 ||
  selectedLabel.includes(item.car.company)||
  selectedLabel.includes(item.car.license)||
  selectedLabel.includes(item.car.people)||
  selectedLabel.includes(item.car.location)
 )
////////////////////////////

  
   console.log ("filtered data", filteredData)
      
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
        <CostOfCarContainer>
      <CostCarBoxWrapper>
        <CostTitle>Cost of car</CostTitle>
        <Border></Border>
        <DispJustAlgn style={{ padding: "20px 0px 50px 0px", gap: "0px" }}>
          <FromToBox>
            <CostText>from</CostText>
            <input type="text" style={{ border: "1px solid black" }} />
          </FromToBox>
          <FromToBox>
            <CostText>to</CostText>
            <input type="text" style={{ border: "1px solid black" }} />
          </FromToBox>
        </DispJustAlgn>
      </CostCarBoxWrapper>

      <CostCarBoxWrapper>
        <Accordion
          defaultExpanded
          sx={{ boxShadow: "none", backgroundColor: "#FAFAFA", width: "100%" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{ padding: "0px" }}
          >
            <CostTitle>Company</CostTitle>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "0px" }}>
            <Typography>
              <Border $marginBottom30></Border>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="위드원모터스" onChange={() => handleCheckBoxChange("위드원모터스")}/>
                <FormControlLabel control={<Checkbox />} label="미스터캠퍼" onChange={() => handleCheckBoxChange("미스터캠퍼")}/>
                <FormControlLabel control={<Checkbox />} label="드림캠핑카" onChange={() => handleCheckBoxChange("드림캠핑카")}/>
                <FormControlLabel control={<Checkbox />} label="모터홈코리아" onChange={() => handleCheckBoxChange("모터홈코리아")}/>
              </FormGroup>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </CostCarBoxWrapper>
      <CostCarBoxWrapper>
        <Accordion
          defaultExpanded
          sx={{ boxShadow: "none", backgroundColor: "#FAFAFA", width: "100%" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{ padding: "0px" }}
          >
            <CostTitle>License type</CostTitle>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "0px" }}>
            <Typography>
              <Border $marginBottom30></Border>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="1종 보통" onChange={() => handleCheckBoxChange("1종 보통")}/>
                <FormControlLabel control={<Checkbox />} label="2종 보통" onChange={() => handleCheckBoxChange("2종 보통")}/>
                <FormControlLabel control={<Checkbox />} label="3종 보통" onChange={() => handleCheckBoxChange("3종 보통")}/>
              </FormGroup>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </CostCarBoxWrapper>
      <CostCarBoxWrapper>
        <Accordion
          defaultExpanded
          sx={{ boxShadow: "none", backgroundColor: "#FAFAFA", width: "100%" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{ padding: "0px" }}
          >
            <CostTitle>Number of travelers</CostTitle>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "0px" }}>
            <Typography>
              <Border $marginBottom30></Border>
              <i style={{color: "#006DAB"}}>*Children are considered</i>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="3인"  onChange={() => handleCheckBoxChange("3인")}/>
                <FormControlLabel control={<Checkbox />} label="4인"  onChange={() => handleCheckBoxChange("4인")}/>
                <FormControlLabel control={<Checkbox />} label="5인"  onChange={() => handleCheckBoxChange("5인")}/>
                <FormControlLabel disabled control={<Checkbox />} label="6인"  onChange={() => handleCheckBoxChange("6인")}/>
              </FormGroup>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </CostCarBoxWrapper>
      <CostCarBoxWrapper>
        <Accordion
          defaultExpanded
          sx={{ boxShadow: "none", backgroundColor: "#FAFAFA", width: "100%" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{ padding: "0px" }}
          >
            <CostTitle>Location</CostTitle>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "0px" }}>
            <Typography>
              <Border $marginBottom30></Border>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="경상권" onChange={() => handleCheckBoxChange("경상권")}/>
                <FormControlLabel control={<Checkbox />} label="수도권" onChange={() => handleCheckBoxChange("수도권")}/>
                <FormControlLabel control={<Checkbox />} label="경상권" onChange={() => handleCheckBoxChange("경상권")}/>
                <FormControlLabel control={<Checkbox />} label="충청권" onChange={() => handleCheckBoxChange("충청권")}/>
        
              </FormGroup>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </CostCarBoxWrapper>

      <DispJustAlgn $gap>
        <SearchButton>Cancel</SearchButton>
        <SearchButton>Search</SearchButton>
      </DispJustAlgn>

      <DispJustAlgn $column $alignStart $gap>
        <p style={{ color: "#006DAB" }}>Compare</p>
        <DispJustAlgn $gap $justifyStart>
          <CompareBox>
            <img src={compare22} alt="img" />
          </CompareBox>
          <CompareBox>
            <img src={compare22} alt="img" />
          </CompareBox>
          <CompareBox>
            <img src={compare22} alt="img" />
          </CompareBox>
        </DispJustAlgn>
      </DispJustAlgn>
    </CostOfCarContainer>
        </CostOfCarContainerHide>







        {/* sort navbar, grid and column wrapper */}
        <div style={{width: "100%", maxWidth: "1250px"}}>
          
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
                    <CostTitle $colorBlue>{filteredData.length}</CostTitle>
                  </CarSortNavbarLeft>
                </SidebarItemNumberTablet>

              <GridColumnButtonWrapper $hide>
                <ToggleButtonGroup
                   value={view}
                   exclusive
                   onChange={handleChange}
                 >
                   <ToggleButton value="list" aria-label="list" sx={{height: "30px", width: "40px"}}  onClick={handleGridClicked}>
                     <ViewModuleIcon />
                   </ToggleButton>
                   <ToggleButton value="module" aria-label="module" sx={{height: "30px", width: "40px"}}  onClick={handleColumnClicked}>
                   <ViewListIcon /> 
                   </ToggleButton>
                 </ToggleButtonGroup>
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
                <ToggleButtonGroup
                   value={view}
                   exclusive
                   onChange={handleChange}
                 >
                   <ToggleButton value="list" aria-label="list" sx={{height: "30px", width: "40px"}}  onClick={handleGridClicked}>
                     <ViewModuleIcon />
                   </ToggleButton>
                   <ToggleButton value="module" aria-label="module" sx={{height: "30px", width: "40px"}}  onClick={handleColumnClicked}>
                   <ViewListIcon /> 
                   </ToggleButton>
                 </ToggleButtonGroup>
              </GridColumnButtonWrapper>
              </CarSortNavbarRight>
            </CarSortNavbar>
            <Border $width100 $margin0 $marginTop6></Border>
          </div>

          {active ? <GridCarBoxComponent exportedData = {filteredData} /> : <ColumnCarBoxComponent  exportedData = {filteredData}/>}
        </div>
      </SidebarAndCarBoxesContainer>
    </MotorMainContainer>
  );
};

export default MotorComponent;
