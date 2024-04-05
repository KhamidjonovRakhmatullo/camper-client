import styled from 'styled-components'
import MotorBgImg from "../assets/motorMain1.png"

export const MotorMainBg =styled.div`
background-image: url(${MotorBgImg});
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
padding: 16px 2px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.10);
cursor: pointer;
`

export const StyledSelect =styled.select`
padding: ${(props) => props.$padding ? ` 8px 100px 8px 10px` : ` 8px 30px 8px 10px`};
border-radius: 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
color: rgba(55, 55, 55, 0.60);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */
`

export const CarBoxContainer =styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 20px;
@media only screen and (max-width: 900px){
    grid-template-columns: repeat(2, 1fr);
    .LeftSideBar{
        display: none;
    }
    
}
@media only screen and (max-width: 600px){
    grid-template-columns: repeat(1, 1fr);
}

`

export const CarBox =styled.div`
/* max-width: 350px; */
flex: 1;
border-radius: 25px;
padding: 15px 10px;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
`

export const Price =styled.p`
color: ${(props)=>props.$colorWhiteH1 ? `white` : `#006DAB`};
font-family: Montserrat;
font-size: ${(props) => props.$fontSize80 ?`80px` : `22px`};
font-style: normal;
font-weight: 700;
line-height: normal;`

export const BrandName =styled.div`
display: flex;
justify-content: space-between;
align-items: center;
color: var(--text, #373737);
font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;`

export const CarBoxButton =styled.button`
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