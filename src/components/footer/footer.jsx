import React from 'react'
import { StdLogo } from '../navbar/NavStyled'
import { DispJustAlgn } from '../../styles/styled'
import { FooterStd, FooterText, FooterTitle } from './styled'
import youtube1 from '../assets/youtube.svg'
import instagram1 from '../assets/instagram.svg'
import naver1 from '../assets/naver.svg'


const FooterComponent = () => {
  return (
        <FooterStd>
        <div style={{flex: "1", border: "0px solid red"}}>
          <StdLogo $colorWhiteLogo>Camper</StdLogo>
        </div>

        <DispJustAlgn style={{flex: "6", border :"0px solid black", justifyContent: "space-around"}}>
            <DispJustAlgn $column $alignStart >
                <FooterTitle>Services</FooterTitle>
                <FooterText>Camping</FooterText>
                <FooterText>Lodging</FooterText>
                <FooterText>Harbor</FooterText>
                <FooterText>Day Use</FooterText>
            </DispJustAlgn>

            <DispJustAlgn $column $alignStart>
                <FooterTitle>Menu</FooterTitle>
                <FooterText>About</FooterText>
                <FooterText>Services</FooterText>
                <FooterText>Booking</FooterText>
                <FooterText>Blog</FooterText>
            </DispJustAlgn>

            <DispJustAlgn $column $alignStart>
                <FooterTitle>Contact</FooterTitle>
               <DispJustAlgn $gap>
                <img src={youtube1} alt="icon" />
                <img src={instagram1} alt="icon" />
                <img src={naver1} alt="icon" />
               </DispJustAlgn>
                <FooterText>021 Korea Seul, LA</FooterText>
                <FooterText>camper@example.com</FooterText>
                <FooterText>(021) 345-6789-99</FooterText>
            </DispJustAlgn>
        </DispJustAlgn>
        </FooterStd>
  )
}

export default FooterComponent