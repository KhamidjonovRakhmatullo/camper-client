import React from 'react'
import { NotFoundContainer } from '../../styles/styled'
import { StdLogo } from "../../styles/NavStyled"
import { CarBoxButton, Price } from '../../styles/motorStyled'
import { useNavigate } from 'react-router-dom'
import { WhiteButton } from '../../styles/carInfoStyle'

const Notfound = () => {
    const navigate = useNavigate();
    const handleBack= () => {
       navigate(-1)
       console.log ("clicked");
    }
  return (
    <div>
        <NotFoundContainer>
            <Price style={{fontSize: "55px"}}>404</Price>
            <StdLogo>Page Not Found </StdLogo>
           <WhiteButton $Padding onClick={handleBack}>Go Back</WhiteButton>
            <p style={{color: "#006DAB"}}>Click the button to go back</p>
        </NotFoundContainer>
    </div>
  )
}

export default Notfound