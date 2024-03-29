import React, { useState } from 'react'
import TotalScore from './TotalScore'
import styled from "styled-components"
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
import Button from './Button'
import ShowRules from './ShowRules'

const GamePlay = () => {
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1)
    const [score, setScore] = useState(0);
    const [rules, setRules] = useState(false);
    const [error, setError] = useState("");


    function rollDice() {

        if (!selectedNumber) {
            setError("You have not selected any number");
            return;
        }
        const generateRandomNumber = (min, max) => {
            return Math.floor(Math.random() * (max - min) + min);
        }
        setCurrentDice(generateRandomNumber(1, 6));

        if (currentDice == selectedNumber) {
            setScore((prev) => prev + currentDice)
        }
        else {
            setScore((prev) => prev - 2)
        }

        setSelectedNumber(undefined);
    }

    return (
        <MainContainer>
            <TopContainer>
                <TotalScore score={score} />
                <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError} />
            </TopContainer>
            <RollDice rollDice={rollDice} currentDice={currentDice} />
            <div className='btn'>
                <OutlineButton onClick={()=>setScore(0)}>Reset Score</OutlineButton>
                <Button onClick={() => setRules((prev) => !prev)}>{rules ? "Hide" : "Show"} Rules</Button>
                {rules && <ShowRules />}
            </div>
        </MainContainer>
    )
}

export default GamePlay

const MainContainer = styled.div`
padding-top: 70px;

.btn{
    margin-top: 26px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:24px;
}
`

const TopContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: end;
`

const OutlineButton = styled.div`
width:220px;
height: 44px;
background: white;
color: black;
font-size: 16px;
font-weight: 400;
text-align: center;
align-content: center;
cursor: pointer;
border-radius: 5px;
border: 1px solid black;
transition: 0.3s background ease-in;

&:hover{
    transition: 0.3s background ease-in;
    background-color: black;
    color: white
}
`
