import styled from 'styled-components'

export const StdLogo =styled.h1`
color: ${(props)=> props.$colorWhiteLogo ? `white` : `#006DAB`};
font-family: Montserrat;
font-size: 38px;
font-style: normal;
font-weight: 600;
line-height: normal;
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

export const SVG =styled.div`

`

