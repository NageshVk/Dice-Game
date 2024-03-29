import React from 'react'
import styled from 'styled-components'

const ShowRules = () => {
  return (
    <Rules>
      <h3>How to play dice game</h3>
      <div>
        <ul className='rules'>
          <li>Select any number</li>
          <li>Click on the dice image</li>
          <li>After click on dice if the selected number is equal to dice image you will get same point as dice</li>
          <li>If you get wrong guess then 2 pount will be deducted</li>
        </ul>
      </div>
    </Rules>
  )
}

export default ShowRules

const Rules = styled.div`
width: 794px;
height: 208px;
background-color: #FBF1F1;
display: flex;
flex-direction: column;
gap:24px;
border-radius: 5px;


h3{
    margin-top: 20px;
    margin-left: 20px;
    font-size: 24px;
    font-weight: 800px;

}
.rules{
    list-style: none;
    margin-left:0px ;
    font-size: 16px;
    font-weight: 500px;
    line-height: 25px;
}

`;