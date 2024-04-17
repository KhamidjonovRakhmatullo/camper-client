import React, { useState } from 'react'
import { CarBoxButton } from '../../styles/motorStyled'

const UseStateComponent = () => {
    const [count, setCount] = useState(0)
    function handleIncreament(){
       setCount (count +1)
    }
    function handleDecreament(){
        if (count > 0){
        setCount (count -1)
    }
    else{
        alert("The count is: 0")
    }
     }
   
  return (
    <div>
        <p>Count: {count}</p>
        <CarBoxButton onClick={ handleIncreament}>Increament</CarBoxButton>
        <CarBoxButton onClick={ handleDecreament}>Decreament</CarBoxButton>
    </div>
  )
}

export default UseStateComponent