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

const MotorComponent = () => {
  const data = campcar.maindata;
////grid and column
  const [active, setActive] = useState(true);

  const handleGridClicked = () => {
    setActive(true);
  };

  const handleColumnClicked = () => {
    setActive(false);
  };
///////////////////////////////
////sidebar
   const [showFilteredCompany, setShowFilteredCompany] = useState({
    다온티앤티: false,
    제일모빌: false,
    영남캠핑카: false,
    한울캠핑카: false,
    훼미리캠핑카: false,
    에이스캠퍼: false,
    월든모빌: false,
    위드원모터스: false,
    미스터캠퍼: false,
    드림캠핑카: false,
    모터홈코리아: false,
   })

   const handleCheckBoxChanged = (company) => {
    setShowFilteredCompany ({
      ...showFilteredCompany,
     [company] : !showFilteredCompany [company]
    })
   }
////////////////////////////
   const filteredData = data.filter((item) => {
    if(showFilteredCompany.다온티앤티 && item.car.company === "다온티앤티"){
      return true
    }
    if(showFilteredCompany.제일모빌 && item.car.company === "제일모빌") {
      return true
    }
    if(showFilteredCompany.영남캠핑카 && item.car.company === "영남캠핑카"){
      return true
    }
    if(showFilteredCompany.한울캠핑카 && item.car.company === "한울캠핑카") {
      return true
    }
    if(showFilteredCompany.훼미리캠핑카 && item.car.company === "훼미리캠핑카"){
      return true
    }
    if(showFilteredCompany.에이스캠퍼 && item.car.company === "에이스캠퍼"){
      return true
    }
    if(showFilteredCompany.월든모빌 && item.car.company === "월든모빌"){
      return true
    }
    if(showFilteredCompany.위드원모터스 && item.car.company === "위드원모터스") {
      return true
    }
    if(showFilteredCompany.미스터캠퍼 && item.car.company === "미스터캠퍼"){
      return true
    }
    if(showFilteredCompany.드림캠핑카 && item.car.company === "드림캠핑카"){
      return true
    }
   if(showFilteredCompany.모터홈코리아 && item.car.company === "모터홈코리아"){
    return true
   }
    else{
      return false
    }
   })
   console.log ("filtered data", filteredData)
      
  return (
    <MotorMainContainer>
      <MotorBgImage>
        <CostText $fontSize $colorWhite>
          Home/Motor
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
          Motors
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
                <FormControlLabel control={<Checkbox />} label="다온티앤티" onChange={() => handleCheckBoxChanged("다온티앤티")}/>
                <FormControlLabel control={<Checkbox />} label="제일모빌"  onChange={() => handleCheckBoxChanged("제일모빌")}/>
                <FormControlLabel control={<Checkbox />} label="영남캠핑카"  onChange={() => handleCheckBoxChanged("영남캠핑카")}/>
                <FormControlLabel control={<Checkbox />} label="영남캠핑카" onChange={() => handleCheckBoxChanged("영남캠핑카")}/>
                <FormControlLabel control={<Checkbox />} label="한울캠핑카" onChange={() => handleCheckBoxChanged("한울캠핑카")}/>
                <FormControlLabel control={<Checkbox />} label="훼미리캠핑카" onChange={() => handleCheckBoxChanged("훼미리캠핑카")}/>
                <FormControlLabel control={<Checkbox />} label="에이스캠퍼" onChange={() => handleCheckBoxChanged("에이스캠퍼")}/>
                <FormControlLabel control={<Checkbox />} label="월든모빌" onChange={() => handleCheckBoxChanged("월든모빌")}/>
                <FormControlLabel control={<Checkbox />} label="위드원모터스" onChange={() => handleCheckBoxChanged("위드원모터스")}/>
                <FormControlLabel control={<Checkbox />} label="미스터캠퍼" onChange={() => handleCheckBoxChanged("미스터캠퍼")}/>
                <FormControlLabel control={<Checkbox />} label="드림캠핑카" onChange={() => handleCheckBoxChanged("드림캠핑카")}/>
                <FormControlLabel control={<Checkbox />} label="모터홈코리아" onChange={() => handleCheckBoxChanged("모터홈코리아")}/>
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
                <FormControlLabel control={<Checkbox />} label="1종 보통" onChange={() => handleCheckBoxChanged("1종 보통")}/>
                <FormControlLabel control={<Checkbox />} label="2종 보통" onChange={() => handleCheckBoxChanged("2종 보통")}/>
                <FormControlLabel control={<Checkbox />} label="3종 보통" onChange={() => handleCheckBoxChanged("3종 보통")}/>
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
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="2인" />
                <FormControlLabel control={<Checkbox />} label="3인" />
                <FormControlLabel control={<Checkbox />} label="4인" />
                <FormControlLabel control={<Checkbox />} label="5인" />
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
                <FormControlLabel control={<Checkbox />} label="경상권" onChange={() => handleCheckBoxChanged("경상권")}/>
                <FormControlLabel control={<Checkbox />} label="수도권" onChange={() => handleCheckBoxChanged("수도권")}/>
                <FormControlLabel control={<Checkbox />} label="경상권" onChange={() => handleCheckBoxChanged("경상권")}/>
                <FormControlLabel control={<Checkbox />} label="충청권" onChange={() => handleCheckBoxChanged("충청권")}/>
        
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

          {active ? <GridCarBoxComponent exportedData = {filteredData} /> : <ColumnCarBoxComponent  exportedData = {filteredData}/>}
        </div>
      </SidebarAndCarBoxesContainer>
    </MotorMainContainer>
  );
};

export default MotorComponent;
