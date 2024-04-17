import React from 'react'
import { StdLogo } from '../navbar/NavStyled'
import { FooterContainer, FooterItems, FooterLogoWrapper, FooterRightFlex6, FooterText, FooterTitle } from './footerStyle'
import youtube1 from '../assets/youtube.svg'
import instagram1 from '../assets/instagram.svg'
import naver1 from '../assets/naver.svg'


const FooterComponent = () => {
  return (
        <FooterContainer>
        <div style={{flex: "1"}}>
          <StdLogo $colorWhiteLogo>Camper</StdLogo>
        </div>

        <FooterRightFlex6>
            <FooterItems>
                <FooterTitle>Services</FooterTitle>
                <FooterText>Camping</FooterText>
                <FooterText>Lodging</FooterText>
                <FooterText>Harbor</FooterText>
                <FooterText>Day Use</FooterText>
            </FooterItems>

            <FooterItems>
                <FooterTitle>Menu</FooterTitle>
                <FooterText>About</FooterText>
                <FooterText>Services</FooterText>
                <FooterText>Booking</FooterText>
                <FooterText>Blog</FooterText>
            </FooterItems>

            <FooterItems>
                <FooterTitle>Contact</FooterTitle>
               <FooterLogoWrapper>
                <img src={youtube1} alt="icon" />
                <img src={instagram1} alt="icon" />
                <img src={naver1} alt="icon" />
               </FooterLogoWrapper>
                <FooterText>021 Korea Seul, LA</FooterText>
                <FooterText>camper@example.com</FooterText>
                <FooterText>(021) 345-6789-99</FooterText>
            </FooterItems>
        </FooterRightFlex6>
        </FooterContainer>
  )
}

export default FooterComponent