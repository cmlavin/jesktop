import React from 'react';
import GameBoard from './GameBoard'

const Game = (props) =>{
  console.log(props.questions)
    return(
      <div>
        <GameBoard questions={props.questions} randVals={props.randomValues}/>
      </div>
    )
}

export default Game;
