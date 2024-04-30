import React from 'react'
import { NotFoundContainer } from '../../styles/styled'
import { StdLogo } from "../../styles/NavStyled"
import { CarBoxButton, Price } from '../../styles/motorStyled'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate = useNavigate();
    const handleBack= () => {
       navigate(-1)
       console.log ("clicked");
    }
  return (
    <div>
        <NotFoundContainer>
            <Price $fontSize80>404</Price>
            <StdLogo>Page Not Found </StdLogo>
            <CarBoxButton onClick={handleBack} style={{padding: "16px 10%"}}>Back Home</CarBoxButton>
            <p style={{color: "#006DAB"}}>Click the button to go back</p>
        </NotFoundContainer>
    </div>
  )
}

export default Notfound