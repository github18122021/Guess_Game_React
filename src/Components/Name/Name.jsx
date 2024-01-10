import { useState } from "react";

function Name(prop) {
    let [name, setName] = useState('');
    let {playClicked} = prop;
    
    function setPlayerName(event) {
        setName(event.target.value);
    }
    
    function passName() {

      // player names in games is that they should be alphanumeric and may contain underscores or hyphens. They should also start with a letter and have a certain length limit

      const playerNameRegex = /^[a-zA-Z][a-zA-Z0-9_-]{2,15}$/;

      if(!playerNameRegex.test(name)) {
        alert('Player name should be alphanumeric and may contain underscores or hyphens. They should also start with a letter and have a certain length limit');
        return;
      }

        playClicked(name);
    }

  return (
    <>
    <section className="game-initiate">
      <label htmlFor="name">Name :</label>
      <input type="text" placeholder="player name" id="name" name="playerName" onChange={setPlayerName}/>
      <section className="button-wrapper">
        <button className="play-btn" onClick={passName}>Play</button>
      </section>
    </section>
    </>
  )
}

export default Name
