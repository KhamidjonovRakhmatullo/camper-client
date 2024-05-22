import styled from "styled-components";

export const FooterContainer = styled.div`
padding: 50px 70px 70px 70px;
    background: var(--blue, #006DAB);
    display: flex;
    /* justify-content: space-around; */
    /* padding-top: 50px; */
    /* padding-bottom: 100px; */
`;

export const FooterRightFlex6 =styled.div`
flex: 6;
display: flex;
justify-content: space-around;

@media only screen and (max-width: 1100px){
    display: none;
}
`

export const FooterItems =styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
`

export const FooterText = styled.p`
padding: 5px 0px;
color: #FFF;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
cursor: pointer;
&:hover{
    color: #FF7A00;
}
`;

export const FooterTitle =styled.h3`
margin-bottom: 35px;
color: #FFF;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
export const FooterLogoWrapper =styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
`