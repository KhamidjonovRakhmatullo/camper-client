import React from 'react'
import { DispJustAlgn } from '../../styles/styled'
import { CostText, CostTitle, MotorMainBg, Price } from './motorStyled'
import CostComponent from './cost'
import DetailBoxesNavComponent from './detailBoxesNav'
import CarDetailBoxesComponent from './carDetailBoxes'

const MotorComponent = () => {
  return (
    <DispJustAlgn $column>
       <MotorMainBg>
        <CostText $fontSize $colorWhite>Home/Motor</CostText>
        <CostTitle $fontSize27 $fontWeight700 $paddingTop style={{color: "#fff"}} >Our Ranges</CostTitle>
        <Price $fontSize80 $colorWhiteH1>Motors</Price>
       </MotorMainBg>
       <DispJustAlgn $justifyStart $alignStart  style={{backgroundColor: "#FAFAFA", padding: "60px 70px 0px 70px", width: "100%",}}>
        <div className='LeftSideBar' style={{flex: "1",}}>
            <CostComponent></CostComponent>
        </div>

        <div style={{flex: "10",}}>
            <DetailBoxesNavComponent></DetailBoxesNavComponent>
            <CarDetailBoxesComponent></CarDetailBoxesComponent>
        </div>
       </DispJustAlgn>
    </DispJustAlgn>
    
  )
}

export default MotorComponent