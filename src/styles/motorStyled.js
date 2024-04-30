import styled from "styled-components";
import MotorBgImg from "../components/assets/motorMain1.png";
import CaravanBgImg from "../components/assets/CaravanBgMain.png";

export const MotorMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MotorBgImage = styled.div`
  background-image: ${(props) =>
    props.$CaravanBg ? `url(${CaravanBgImg})` : `url(${MotorBgImg})`};
  height: 350px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  /* background: linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// main container
export const SidebarAndCarBoxesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  background-color: #fafafa;
  padding: 60px 10% 0px 10%;
  width: 100%;
  gap: 30px;
  @media only screen and (max-width: 1100px) {
    gap: 0px;
  }
  /* @media only screen and (min-width: 1500px) {
     padding: 57px 15%;
  } */
`;

export const CostOfCarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 25px;
  @media only screen and (max-width: 1100px) {
    display: ${(props) => (props.$hideSideBar ? `none` : ``)};
  }
`;

export const CostOfCarContainerHide = styled.div`
  width: 100%;
  max-width: 10%;
  min-width: 212px;
  display: flex;
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

export const CostCarBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;

export const CostTitle = styled.h2`
  padding-top: ${(props) => (props.$paddingTop ? `13px` : `0px`)};
  border: 0px solid black;
  color: ${(props) => (props.$colorBlue ? `#006DAB` : `#373737`)};
  font-family: Montserrat;
  font-size: ${(props) => (props.$fontSize27 ? `27px` : `18px`)};
  font-style: normal;
  font-weight: ${(props) => (props.$fontWeight700 ? `700` : `600`)};
  line-height: 100%; /* 18px */
`;

export const Border = styled.div`
  width: 100%;
  width: ${(props) => (props.$width100 ? `100%` : ``)};
  height: 1px;
  background: rgba(55, 55, 55, 0.3);
  margin: 15px 0px 30px 0px;
  margin: ${(props) => (props.$margin0 ? `0px` : ``)};
  margin-top: ${(props) => (props.$marginTop6 ? `5px` : ``)};
  margin: ${(props)=> props.$marginBottom30 ? `0px 0px 10px 0px` : ``};
`;

export const FromToBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  input {
    height: 36px;
    width: 90%;
    border-radius: 10px;
  }
`;

export const CostText = styled.p`
  /* padding: ${(props) => (props.$paddingTnB ? `` : ``)}; */
  color: ${(props) => (props.$colorWhite ? `white` : `#373737`)};
  font-family: Montserrat;
  font-size: ${(props) => (props.$fontSize ? `16px` : `14px`)};
  font-style: normal;
  font-weight: ${(props) => (props.$fontWeight ? `600` : `500`)};
  line-height: 100%; /* 14px */
`;

export const SearchButton = styled.button`
  padding: 9px 30px;
  border-radius: 10px;
  border: none;
  border-radius: 60px;
  background: var(--blue, #006dab);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  color: #fff;
  font-family: "Open Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  &:hover {
    background-color: #ff7a00;
  }
`;

export const CompareBox = styled.div`
  img {
    width: 100%;
  }
  width: 100%;
  padding: 16px 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

//sort button
export const CarSortButton = styled.div`
  display: none;
  @media only screen and (max-width: 1100px) {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
`;

export const CarSortNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -3.5px;
  @media only screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(1, 4fr);
  }
  @media only screen and (max-width: 330px) {
    /* display: flex;
    flex-direction: column; */

  }
`;
export const CarSortNavbarRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const SortByWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;
  @media only screen and (max-width: 1100px) {
    p {
      display: none;
    }
  }
  @media only screen and (max-width: 330px) {
    display: flex;
    flex-direction: column;
    align-items: start;

  }
`;

export const CarSortNavbarLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const CarSortNavbarLeft_ItemAndButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SidebarItemNumberTablet =styled.div`
display: flex;
@media only screen and (max-width: 330px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    margin-bottom: 10px;

  }
`

export const StyledSelect = styled.select`
  padding: ${(props) =>
    props.$padding ? ` 0px 100px 0px 10px` : ` 0px 30px 0px 10px`};
  border-radius: 5px;
  border: 1px solid rgba(55, 55, 55, 0.3);
  color: rgba(55, 55, 55, 0.6);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
  height: 30px;
`;

export const GridColumnButtonWrapper = styled.div`
  display: flex;
  @media only screen and (min-width: 600px) {
    display: ${(props) => (props.$hide ? `none` : `flex`)};
  }

  @media only screen and (max-width: 600px) {
    display: ${(props) => (props.$hide ? `flex` : `none`)};
    margin-bottom: 10px;
  }
`;

export const GridButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 5px 0px 0px 5px;
  border: 1px solid rgba(55, 55, 55, 0.3);
  cursor: pointer;
`;

export const ColumnButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 0px 5px 5px 0px;
  border: 1px solid rgba(55, 55, 55, 0.3);
  cursor: pointer;
`;

export const CarBoxContainer = styled.div`
  max-width: ${(props) => (props.$maxWidthForColumn ? `1400px` : ``)};
  padding: 37px 0px 60px 0px;
  /* border: 1px solid red; */
  display: ${(props) => (props.$flex ? `flex` : `grid`)};
  flex-direction: ${(props) => (props.$column ? `column` : ``)};
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media only screen and (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
    padding: "0px 70px";
  }
  @media only screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    padding: "0px 70px";
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CarBox = styled.div`
  /* border: 1px solid black; */
  display: ${(props) => (props.$flexBox ? `flex` : ``)};
  justify-content: center;
  align-items: center;
  max-width: ${(props) => (props.$maxWidth ? `350px` : `100%`)};
  /* border: 2px solid red; */
  flex: 1;
  border-radius: 25px;
  padding: 15px 10px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  &:hover {
        background-color: #FAFAFA;
        transform: scale(1.05);
        transition: 0.5s ease;
        cursor: pointer;
        /* border: 0.9px solid #006DAB; */
        border-radius: 25px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
    }
`;

//other container carbox img
export const CarBoxImgWrapper = styled.div`
  flex: 0.45;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  img {
    width: 100%;
    max-height: 150px;
  }
`;

//motor img wrapper
export const CarBoxImage = styled.div`
  flex: 0.45;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid blue; */
  img {
    width: 100%;
    height: ${(props) => (props.$hight150px ? `150px` : ``)};
  }
  @media only screen and (min-width: 700px) {
    max-width: ${(props) => (props.$maxWidthForImage ? `280px` : ``)};
    min-width: ${(props) => (props.$maxWidthForImage ? `280px` : ``)};
  }
`;

export const CarBoxInfo = styled.div`
  /* border: 1px solid red; */
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: ${(props) => (props.$paddingTwoSides ? `0px 20px` : `0px`)};
  @media only screen and (max-width: 600px) {
    padding: ${(props) => (props.$paddingTwoSides ? `0px 10px` : `0px`)};
  }
`;

export const Price = styled.p`
  color: ${(props) => (props.$colorWhiteH1 ? `white` : `#006DAB`)};
  font-family: Montserrat;
  font-size: ${(props) => (props.$fontSize80 ? `80px` : `22px`)};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media only screen and (max-width: 600px) {
    font-size: ${(props) => (props.$fontSize80 ? `80px` : `16px`)};
  }
`;

//when it column
export const CarBoxPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  width: 100%;
`;

export const BrandName = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text, #373737);
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 12px 0px 18px 0px;
`;

export const CarBoxRateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const CarBoxButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => (props.$marginTop45 ? `45px` : `13px`)};
  gap: 10px;
  width: 100%;
`;

export const CarBoxButton = styled.button`
  width: 100%;
  padding: ${(props) => (props.$paddingRnL ? `2% 3.5%` : `3% 5%`)};
  border-radius: 10px;
  border: 1px solid var(--blue, #006dab);
  border: ${(props) => props.$Border1 ? `2px solid white` : ``};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  color: var(--blue, #006dab);
  color: ${(props) => props.$colorWhite2 ? `white` : ``};
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background-color: ${(props)=> props.$BgColorTransparent ? `transparent` : `#fff`};
  cursor: pointer;
  &:hover {
    background-color: #006dab;
    color: #fff;
    border: 1px solid #006dab;

  }
  @media only screen and (min-width: 600px) {
  padding: ${(props) => (props.$paddingColumn ? `8px 18px` : ``)};
     
  }
`;

export const MainDrawer = styled.div`
  .Button {
    display: none;
    /* border:1px solid red; */
    padding: 0;

    @media only screen and (max-width: 900px) {
      display: flex;
      justify-content: start;
    }
  }
`;
export const DrawerIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 40px;
  border: 1px solid rgba(55, 55, 55, 0.3);
  border-radius: 5px;
`;
