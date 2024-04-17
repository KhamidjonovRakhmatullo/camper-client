import styled from 'styled-components'

export const NavbarContainer =styled.h1`
display: flex;
justify-content: space-around;
align-items: center;
padding: 22px 70px;
background-color: white;
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
`

export const MenuImg =styled.div`
display: none;
margin-right: ${(props)=> props.$marginRight ? `16px` : ``};
gap: ${(props) => props.$gap ? `25px` : ``};
@media only screen and (max-width: 1000px){
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
@media only screen and (max-width: 1000px){
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
@media only screen and (max-width: 1000px){
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


