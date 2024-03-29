import React from 'react'
import styled from 'styled-components'

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <h3>Total Score</h3>
    </ScoreContainer>
  )
}

export default TotalScore


const ScoreContainer = styled.div`
text-align: center;
max-width: 200px;
h1{
    font-size: 100px;
    font-weight: 400;
}
h3{
    font-size: 24px;
    font-weight: 400;
}

`
