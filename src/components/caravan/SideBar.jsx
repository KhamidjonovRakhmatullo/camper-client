import React, { useState } from "react";
import {
  Border,
  CompareBox,
  CostText,
  CostTitle,
  SearchButton,
  CostCarBoxWrapper,
  CostOfCarContainer,
  FromToBox,
} from "../../styles/motorStyled";
import { DispJustAlgn } from "../../styles/styled";
import compare22 from "../assets/compare2.png";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { campcar } from "../mock/mockdata";

const SideBarComponent = () => {
   const data = campcar.maindata

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
  return (
    <CostOfCarContainer>
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
            <FormControlLabel control={<Checkbox />} label="다온티앤티" onChange={() => handleCheckBoxChange("다온티앤티")}/>
            <FormControlLabel control={<Checkbox />} label="제일모빌"  onChange={() => handleCheckBoxChange("제일모빌")}/>
            <FormControlLabel control={<Checkbox />} label="영남캠핑카"  onChange={() => handleCheckBoxChange("영남캠핑카")}/>
            <FormControlLabel control={<Checkbox />} label="영남캠핑카" onChange={() => handleCheckBoxChange("영남캠핑카")}/>
            <FormControlLabel control={<Checkbox />} label="한울캠핑카" onChange={() => handleCheckBoxChange("한울캠핑카")}/>
            <FormControlLabel control={<Checkbox />} label="훼미리캠핑카" onChange={() => handleCheckBoxChange("훼미리캠핑카")}/>
            <FormControlLabel control={<Checkbox />} label="에이스캠퍼" onChange={() => handleCheckBoxChange("에이스캠퍼")}/>
            <FormControlLabel control={<Checkbox />} label="월든모빌" onChange={() => handleCheckBoxChange("월든모빌")}/>
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
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="2인" onChange={() => handleCheckBoxChange("2인")} />
            <FormControlLabel control={<Checkbox />} label="3인"  onChange={() => handleCheckBoxChange("3인")}/>
            <FormControlLabel control={<Checkbox />} label="4인"  onChange={() => handleCheckBoxChange("4인")}/>
            <FormControlLabel control={<Checkbox />} label="5인"  onChange={() => handleCheckBoxChange("5인")}/>
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
    </CostOfCarContainer>
  );
};

export default SideBarComponent;
