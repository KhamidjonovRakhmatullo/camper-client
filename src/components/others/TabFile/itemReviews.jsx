import React from "react";
import { CostTitle } from "../../../styles/motorStyled";
import { campcar } from "../../mock/mockdata";
import { CompanyName, DividerWrapper, ItemReviewsAndSelect, ItemReviewsCarBox, ItemReviewsCarBoxImage, ItemReviewsCarBoxLeft, ItemReviewsCarBoxRight, ItemReviewsContainer, NameOfCar } from "../../../styles/carInfoStyle";
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ItemReviewsComponent = () => {
  const data = campcar.maindata;
  const data1 = data.slice(1, 5)
  console.log("data is:", data);

  const ITEM_HEIGHT = 35;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 177,
      },
    },
  };
  
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <div style={{display: 'flex', justifyContent :"center", alignItems: 'center'}}>
      <ItemReviewsContainer>
        <ItemReviewsAndSelect>
          <div style={{ display: "flex", gap: "10px" }}>
            <CostTitle>Premium Review</CostTitle>
            <CostTitle $colorBlue>{data.length}</CostTitle>
          </div>
          <FormControl sx={{ width: 177, }}>
          <InputLabel id="demo-multiple-name-label">Name</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {data.map((value, key) => (
              <MenuItem
                style={getStyles(value, personName, theme)}
              >
                {value.car.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </ItemReviewsAndSelect>
        {data1.map((value, key) => {
          return (
              <div>
            <ItemReviewsCarBox key={key}>
              <ItemReviewsCarBoxLeft>
                <ItemReviewsCarBoxImage>
                  <img src={value.car.photo} alt="img"/>
                </ItemReviewsCarBoxImage>
              <div>
                <NameOfCar>{value.car.name}</NameOfCar>
                <CompanyName $marginTnB>{value.car.company}</CompanyName>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sapiente.
              </div>
              </ItemReviewsCarBoxLeft>
      
              <ItemReviewsCarBoxRight>
                  <CompanyName $Color000 $ Size18px>ID: {value.id}</CompanyName>
                  <CompanyName $Color000 $ Size18px>Data: {value.car.date}</CompanyName>
                  <CompanyName $Color000 $ Size18px>Rate: {value.car.rate}</CompanyName>
              </ItemReviewsCarBoxRight>
            </ItemReviewsCarBox>
            <DividerWrapper></DividerWrapper>
            </div>
          );
        })}
      </ItemReviewsContainer>
    </div>
  );
};

export default ItemReviewsComponent;
