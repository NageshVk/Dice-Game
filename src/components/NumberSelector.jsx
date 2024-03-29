import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({selectedNumber,setSelectedNumber, error, setError}) => {
   
    const numbers = [1,2,3,4,5,6]

    function handleSelectedNumber(value){
        setSelectedNumber(value);
        setError("");
    }
    
  return (
    <Selector>
      <p className='error'>{error}</p>
      <div className='numbers'>
        {numbers.map((value,i)=>(
            <Box isSelected={value === selectedNumber} key={i}  onClick={() => handleSelectedNumber(value)}>{value}</Box>
        ))}
      </div>
      <h3>Select Number</h3>
    </Selector>
  )
}

export default NumberSelector


const Selector = styled.div`

display: flex;
flex-direction: column;
gap:30px;
align-items: end;

.numbers{
    display: flex;
    gap:24px
}

h3{
    font-size: 24px;
    font-weight: 800px;
}
.error{
  font-size: 24px;
    font-weight: 300px;
    color:red;
}
`;
const Box = styled.div`
    border: 1px solid black;
    height: 72px;
    width: 72px;
    font-size: 24px;
    font-weight:800;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (props.isSelected ? "white" : "black")};
`;