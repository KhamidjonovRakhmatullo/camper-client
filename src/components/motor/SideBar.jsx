import React from "react";
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
import grommet2 from "../assets/grommet.svg";
import compare22 from "../assets/compare2.png";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const SideBarComponent = () => {
  return (
    <CostOfCarContainer>
      <CostCarBoxWrapper>
        <CostTitle>Cost of car</CostTitle>
        <Border></Border>
        <DispJustAlgn style={{ padding: "20px 0px 50px 0px", gap: "0px" }}>
          <FromToBox>
            <CostText>from</CostText>
            <input type="text" />
          </FromToBox>
          <FromToBox>
            <CostText>to</CostText>
            <input type="text" />
          </FromToBox>
        </DispJustAlgn>
      </CostCarBoxWrapper>

      <CostCarBoxWrapper>
      <Accordion defaultExpanded sx={{ boxShadow: "none", backgroundColor: "#FAFAFA", width: "100%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{padding: "0px",}}
        >
          <CostTitle>Brand</CostTitle>
        </AccordionSummary>
        <AccordionDetails sx={{padding:"0px"}}>
          <Typography>
          <Border $marginBottom30></Border>
          <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel required control={<Checkbox />} label="Required" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </CostCarBoxWrapper>

      <CostCarBoxWrapper>
      <Accordion defaultExpanded sx={{ boxShadow: "none", backgroundColor: "#FAFAFA", width: "100%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{padding: "0px",}}
        >
          <CostTitle>Company</CostTitle>
        </AccordionSummary>
        <AccordionDetails sx={{padding:"0px"}}>
          <Typography>
          <Border $marginBottom30></Border>
          <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Aidal" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Knal" />
    </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </CostCarBoxWrapper>
      <CostCarBoxWrapper>
      <Accordion defaultExpanded sx={{ boxShadow: "none", backgroundColor: "#FAFAFA", width: "100%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{padding: "0px",}}
        >
          <CostTitle>License type</CostTitle>
        </AccordionSummary>
        <AccordionDetails sx={{padding:"0px"}}>
          <Typography>
          <Border $marginBottom30></Border>
          <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="1 year" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="2 year" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="1.5 year" />
    </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </CostCarBoxWrapper>
      <CostCarBoxWrapper>
      <Accordion defaultExpanded sx={{ boxShadow: "none", backgroundColor: "#FAFAFA", width: "100%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{padding: "0px",}}
        >
          <CostTitle>Number of travelers</CostTitle>
        </AccordionSummary>
        <AccordionDetails sx={{padding:"0px"}}>
          <Typography>
          <Border $marginBottom30></Border>
          <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="2" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="3-4" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="5+" />
    </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </CostCarBoxWrapper>
      <CostCarBoxWrapper>
      <Accordion defaultExpanded sx={{ boxShadow: "none", backgroundColor: "#FAFAFA", width: "100%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{padding: "0px",}}
        >
          <CostTitle>Number of travelers</CostTitle>
        </AccordionSummary>
        <AccordionDetails sx={{padding:"0px"}}>
          <Typography>
          <Border $marginBottom30></Border>
          <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Seoul" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Deajon" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Busan" />
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
  );
};

export default SideBarComponent;
