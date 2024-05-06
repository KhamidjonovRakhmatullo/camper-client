import styled from 'styled-components'

export const NavbarContainer =styled.h1`
display: flex;
justify-content: space-around;
align-items: center;
padding: 22px 70px;
background-color: white;
/* border: 1px solid red; */
/* position: fixed;
width: 100%;
z-index: 1100; */
box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.10);
@media only screen and (max-width: 600px){
   padding: 15px 30px;
}
`

export const LogoWrapper = styled.div`
flex: 1.5;
display: flex;
justify-content: start;
align-items: center
;
`

export const StdLogo =styled.h1`
color: ${(props)=> props.$colorWhiteLogo ? `white` : `#006DAB`};
font-family: Montserrat;
font-size: 38px;
font-style: normal;
font-weight: 600;
line-height: normal;
@media only screen and (max-width: 600px){
   font-size: 28px;
}
`

export const MenuImg =styled.div`
display: none;
margin-right: ${(props)=> props.$marginRight ? `16px` : ``};
gap: ${(props) => props.$gap ? `25px` : ``};
@media only screen and (max-width: 1100px){
   display: ${(props)=> props.$DisplayFlex ? `none` : `flex`};
}

@media only screen and (max-width: 600px){
   display: ${(props)=> props.$DisplayFlex ? `flex` : `none`};
}
`

export const NavItemsContainer= styled.div`
flex: 2.5;
display: flex;
justify-content: space-around;
@media only screen and (max-width: 1100px){
   display: none;
}
`
export const NavItemsWrapper =styled.div`
display: flex;
justify-content: center;
align-items: center;

`

export const NavItemWrapper2= styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
@media only screen and (max-width: 1100px){
   display: none;
}
`

export const NavRightWrapper =styled.div`
flex: 0.6;
display: flex;
justify-content: space-around;
align-items: center;

@media only screen and (max-width: 600px) {
   display: none;
   
}
`

export const NavbarP =styled.p`
color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
cursor: pointer;
&:hover{
    color: #FF7A00;
}
`

export const SignInTitle =styled.div`
color: var(--text, #373737);
font-family: "Open Sans";
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: 25px;
`

export const SignInInput=styled.div`
display: flex;
flex-direction: column;
align-items: start;
/* border: 1px solid red; */
gap: 10px;
width: 100%;

p{
color: rgba(55, 55, 55, 0.80);
font-family: "Open Sans";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
`

export const SignInCheckBox =styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;

color: #373737;
font-family: "Open Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

// export const Dec
