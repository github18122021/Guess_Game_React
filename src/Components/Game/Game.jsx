

function Game() {

  return (
    <>
      <section className="game-started">

        <label htmlFor="number">Guess the number between 1 to 100</label>

        <section className="input-wrapper">
          <input type="text" placeholder="5" name="guessedNumber" id="number" />
        </section>

        <section className="button-container">
          <button className="game-btn guess-btn">Guess It!</button>
          <button className="game-btn playGame-btn">Play again</button>
        </section>

        <section className="game-response">
          
          {/* 
          <p> 10 is Too High! (1 Attempt left)</p>
          <p>Only 1 attempt left</p>  
          */}
        
        </section>
      </section>
    </>
  )
}

export default Game
