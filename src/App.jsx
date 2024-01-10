import { useState } from 'react';


// importing components

import Name from './Components/Name/Name';
import Game from './Components/Game/Game';

function App() {
  let [displayGame, setDisplayGame] = useState(false);
  let [playerName, setPlayerName] = useState('');

  let changeDisplay = (playerName) => {
    setPlayerName(playerName);
    setDisplayGame(true);

  }

  return (
    <div>
      <>{displayGame ? 
                      <h1 className='game-title'>Welcome to the guess game, {playerName}</h1> 
                      :
                       <h1 className='game-title'>Welcome to the guess game</h1> 
        }</>
      {/* <h1 className='game-title'>Welcome to the guess game</h1> */}
      
      {/* <Name playClicked = {changeDisplay} /> */}

      {/* name section shows only when the display game is false (which is initial case)*/}
      <>{!displayGame && <Name playClicked = {changeDisplay} />}</>
      

      {/* game shows only when the display game is true (which will be true only if the user has clicked on the play button after giving the player name in name section) */}
      {displayGame && <Game/>}
      
    </div>
  )
}

export default App
