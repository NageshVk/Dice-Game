import React from 'react'
import Button from './Button'
import styled from "styled-components"

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="/images/dices 1.png" alt="Dice Game"/>
      </div>
      <div className='content'>
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
display:flex;
justify-content: center;
align-items: center;
height: 100vh;
margin: 0 auto;

h1{
  font-size: 96px;
  font-weight: 800;
}

img{
  width: 649px;
  height:522px;
}

`;