import React from 'react'
import { Border, CostText, CostTitle, StyledSelect } from './motorStyled'
import { DispJustAlgn } from '../../styles/styled'

const DetailBoxesNavComponent = () => {
  return (
    <div>
      <DispJustAlgn $alignStart style={{justifyContent: "space-between", border: "0px solid red"}}>
        <DispJustAlgn $gap>
        <CostTitle>
            Items
        </CostTitle>
        <CostTitle $colorBlue>
            25.600
        </CostTitle>
        </DispJustAlgn>
        <DispJustAlgn $gap>
          <CostText $fontSize>Sort by</CostText>
          < StyledSelect $padding>
            <option>Select</option>
            <option>bb</option>
            <option>cc</option>
          </ StyledSelect>
          < StyledSelect>
            <option>60</option>
            <option>22</option>
            <option>33</option>
          </ StyledSelect>
          < StyledSelect>
            <option>60</option>
            <option>22</option>
            <option>33</option>
          </ StyledSelect>
        </DispJustAlgn>
        </DispJustAlgn>
        <Border $width100 $margin0></Border>
        
    </div>
  )
}

export default DetailBoxesNavComponent