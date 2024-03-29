import React, { useState } from 'react'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay';

const App = () => {

  const[isGamestarted, setIsGameStarted] = useState(false);

  function startGame() {
    setIsGameStarted((prev)=>!prev);
  }

  return (
    <>
      {isGamestarted? <GamePlay/>:<StartGame toggle={startGame}/>}
    </>
  )
}

export default App
