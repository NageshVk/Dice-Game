import React from 'react'
import styled from 'styled-components'

const RollDice = ({rollDice, currentDice}) => {
    return (
        <ShowDice>
            <div className='dice' onClick={rollDice}>
                <img src={`/images/dice_${currentDice}.png`} alt="dice-img" />
            </div>
            <p>Click on Dice to roll</p>
        </ShowDice>
    )
}

export default RollDice

const ShowDice = styled.div`
display:flex;
flex-direction: column;
align-items: center;
gap:15px;
margin-top: 40px;

p{
    font-size: 24px;
    font-weight: 700px;
}

`;