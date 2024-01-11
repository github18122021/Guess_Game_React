import { useState } from "react";



function Game() {
  let [guessedNumber, setGuessedNumber] = useState(0);
  let [gameEnvironment, setGameEnvironment] = useState({
    randomNumber: Math.floor(Math.random() * 101),
    totalTry: 5,
    resultArr: [],
  });
  let [won, setWon] = useState(false);
  let [lost, setLost] = useState(false);

  console.log(gameEnvironment);

  let randomNumber = gameEnvironment.randomNumber;
  let totalTry = gameEnvironment.totalTry;
  let resultArr = gameEnvironment.resultArr;

  function numberChange(e) {
    setGuessedNumber(e.target.value);
  }

  function guessedIt() {
    // to validate the input to ensure it's a number between 1 and 100,
    const numberRegex = /^([1-9][0-9]?|100)$/;

    if (!numberRegex.test(guessedNumber)) {
      alert("Please enter a number between 1 to 100");
      return;
    }


    let tempResult = `${guessedNumber} is `;

    if (guessedNumber > randomNumber)  {
      if (guessedNumber - 10 > randomNumber)  {

        // console.log("Too High!");
        tempResult += "Too High!";
        
      } else if (guessedNumber - 5 > randomNumber) {

        // console.log("High!");
        tempResult += "High!";

      } else {
        // console.log("Near (HINT : LOW)");
        tempResult += "Near (HINT : LOW)";
        
      }
    } else if (guessedNumber < randomNumber) {
      if (randomNumber - 10 > guessedNumber) {

        // console.log("Too Low!");
        tempResult += "Too Low!";

      } else if (randomNumber - 5 > guessedNumber) {

        // console.log("Low!");
        tempResult += "Low!";

      } else {

        // console.log("Near (HINT : PLUS)");
        tempResult += "Near (HINT : PLUS)";
      }
    } else {
      console.log("exact match");
      tempResult += "Exact match";
      setWon(true);
      
    }

    
    if (won) {
      totalTry = 0;
    }

    // tempResult += ` (${totalTry - 1} Attempt left)`;
    
    if (totalTry > 2)  {
      tempResult += ` (${totalTry - 1} Attempts left)`;
    } else {
      tempResult += ` (${totalTry - 1} Attempt left)`;
    }

    resultArr.push(tempResult);
    totalTry--;

    if(totalTry === 0 && !won)  {
      setLost(true);
    }
    

    setGameEnvironment({...gameEnvironment, randomNumber, totalTry, resultArr});
  }

  function resetGame()  {

    setGameEnvironment({
      randomNumber: Math.floor(Math.random() * 101),
      totalTry: 4,
      resultArr: [],
    })

    setWon(false);
    setLost(false);

  }

  return (
    <>
      <section className="game-started">
        <label htmlFor="number">Guess the number between 1 to 100</label>

        <section className="input-wrapper">
          <input
            type="text"
            placeholder="5"
            name="guessedNumber"
            id="number"
            onChange={numberChange}
          />
        </section>

        <section className="button-container">

          {
            gameEnvironment.totalTry === 0 ? <button className="game-btn guess-btn">Guess It!</button> : <button className="game-btn guess-btn" onClick={guessedIt}>Guess It!</button>
          }

          {/* <button className="game-btn guess-btn" onClick={guessedIt}>
            Guess It!
          </button> */}
          <button className="game-btn playGame-btn" onClick={resetGame}>Play again</button>
        </section>

        <section className="game-response">
          {/* 
          <p> 10 is Too High! (1 Attempt left)</p>
          <p>Only 1 attempt left</p>  
          */}
          <>{resultArr.length !== 0 ? <>{resultArr.map((result, index) => {
            return <p key = {index} >{result}</p>
          })}</> : <></>}</>

          <>{won && <p style={{color: "green"}}>Congratulations, You Won the game!</p>}</>
          <>{lost && <p style= {{color: "red"}}>Sorry, You lost the game!. The Correct answer was {gameEnvironment.randomNumber} </p>}</>
        </section>
      </section>
    </>
  );
}

export default Game;
