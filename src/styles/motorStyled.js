import styled from 'styled-components'
import MotorBgImg from "../components/assets/motorMain1.png"
import CaravanBgImg from "../components/assets/CaravanBgMain.png"

export const MotorMainContainer =styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const MotorBgImage =styled.div`
background-image: ${(props)=> props.$CaravanBg ? `url(${CaravanBgImg})` : `url(${MotorBgImg})`};
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
`

export const SidebarAndCarBoxesContainer =styled.div`
display: flex;
justify-content: center;
align-items: start;
background-color: #FAFAFA;
padding: 60px 30px 0px 30px;
/* width: 100%; */
gap: 30px;
@media only screen and (max-width: 1400px){
    gap: 0px;
}
`

export const CostOfCarContainer=styled.div`
display: flex;
flex-direction: column;
align-items: start;
gap: 50px;
@media only screen and (max-width: 1400px){
   display: none;
}
`

export const CostCarBoxWrapper =styled.div`
display: flex;
flex-direction: column;
align-items: start;
`

export const CostTitle =styled.h2`
padding-top: ${(props)=> props.$paddingTop ? `13px` : `0px`};
border: 0px solid black;
color: ${(props) => props.$colorBlue ? `#006DAB` : `#373737`};
font-family: Montserrat;
font-size: ${(props)=> props.$fontSize27 ? `27px` : `18px`};
font-style: normal;
font-weight: ${(props)=> props.$fontWeight700 ? `700` : `600`};
line-height: 100%; /* 18px */
`

export const Border =styled.div`
width: 240px;
width: ${(props)=> props.$width100 ? `100%` : ``};
height: 1px;
background: rgba(55, 55, 55, 0.30);
margin: 15px 0px 30px 0px;
margin: ${(props)=> props.$margin0 ? `0px` : ``};
margin-top: ${(props)=> props.$marginTop6 ? `5px` : ``};
`

export const FromToBox =styled.div`
display: flex;
flex-direction: column;
align-items: start;
input{
    height: 36px;
    width: 91px;
    border-radius: 10px;
}
`

export const CostText =styled.p`
/* padding: ${(props)=> props.$paddingTnB ? `` : ``}; */
color: ${(props)=> props.$colorWhite ? `white` : `#373737`};
font-family: Montserrat;
font-size: ${(props)=> props.$fontSize ? `16px` : `14px`};
font-style: normal;
font-weight: ${(props)=> props.$fontWeight ? `600` : `500`};
line-height: 100%; /* 14px */
`

export const SearchButton =styled.button`
padding: 9px 30px;
border-radius: 10px;
border: none;
border-radius: 60px;
background: var(--blue, #006DAB);
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
color: #FFF;
font-family: "Open Sans";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
cursor: pointer;
&:hover{
    background-color: #FF7A00;
}
`

export const CompareBox =styled.div`
img{
    width: 100%;
}
padding: 16px 2px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.10);
cursor: pointer;
`

export const CarSortNavbar =styled.div`
display: flex;
justify-content: space-between;
align-items: start;
@media only screen and (max-width: 600px){
   display: grid;
   grid-template-columns: repeat(1, 4fr);
}
`
export const CarSortNavbarRight =styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
`
   
export const CarSortNavbarLeft =styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
`

export const CarSortNavbarLeft_ItemAndButtons =styled.div`
display: flex;
justify-content: space-between;
`

export const StyledSelect =styled.select`
padding: ${(props) => props.$padding ? ` 0px 100px 0px 10px` : ` 0px 30px 0px 10px`};
border-radius: 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
color: rgba(55, 55, 55, 0.60);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */
height: 30px;
`

export const GridColumnButtonWrapper= styled.div`
display: flex;
@media only screen and (min-width: 600px){
   display: ${(props)=> props.$hide ? `none` : `flex`};
}

@media only screen and (max-width: 600px){
   display: ${(props)=> props.$hide ? `flex` : `none`};
   margin-bottom: 10px;
}

`

export const GridButton =styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 30px;
flex-shrink: 0;
border-radius: 5px 0px 0px 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
cursor: pointer;
`

export const ColumnButton =styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 30px;
flex-shrink: 0;
border-radius: 0px 5px 5px 0px;
border: 1px solid rgba(55, 55, 55, 0.30);
cursor: pointer;
`

export const CarBoxContainer =styled.div`
max-width: ${(props)=> props.$maxWidthForColumn ? `1400px` : ``};
padding: 37px 0px 60px 0px;
/* border: 1px solid red; */
display: ${(props)=> props.$flex ? `flex` : `grid`};
flex-direction: ${(props)=> props.$column ? `column` : ``};
grid-template-columns: repeat(4, 1fr);
gap: 20px;
@media only screen and (max-width: 1400px){
    grid-template-columns: repeat(2, 1fr);
}
@media only screen and (max-width: 600px){
    grid-template-columns: repeat(1, 1fr);
}

`

export const CarBox =styled.div`
display: ${(props)=> props.$flexBox ? `flex` : ``};
max-width: ${(props)=> props.$maxWidth ? `350px` : `100%`};
/* border: 2px solid red; */
flex: 1;
border-radius: 25px;
padding: 15px 10px;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
`

export const CarBoxImgWrapper =styled.div`
flex: 0.45;
display: flex;
justify-content: center;
align-items: center;
img{
    width: 100%;
    height: 150px;
    }
`

export const CarBoxImage =styled.div`
flex: 0.45;
display: flex;
justify-content: center;
align-items: center;
/* border: 1px solid blue; */
img{
    width: 100%;
    height: 150px;
    }
`

export const CarBoxInfo =styled.div`
/* border: 1px solid red; */
flex: 1;
display: flex;
flex-direction: column;
align-items: start;
padding: ${(props)=> props.$paddingTwoSides ? `0px 30px` : `0px` };
/* justify-content: center; */
` 

export const Price =styled.p`
color: ${(props)=>props.$colorWhiteH1 ? `white` : `#006DAB`};
font-family: Montserrat;
font-size: ${(props) => props.$fontSize80 ?`80px` : `22px`};
font-style: normal;
font-weight: 700;
line-height: normal;`

//when it column
export const CarBoxPriceWrapper =styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`

export const BrandName =styled.div`
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

`

export const CarBoxRateWrapper =styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 5px;
`

export const CarBoxButtonWrapper =styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: ${(props)=> props.$marginTop45 ? `45px` : `13px`};
gap: 10px;
width: 100%;
`

export const CarBoxButton =styled.button`
width: 100%;
padding: ${(props)=> props.$paddingRnL ? `8px 13px`: `8px 25px`};
border-radius: 10px;
border: 1px solid var(--blue, #006DAB);
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
background-color: #FFF;
cursor: pointer;
&:hover{
    background-color: #006DAB;
    color: #FFF;
}
`