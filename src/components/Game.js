import React from 'react';
import GameBoard from './GameBoard'

const Game = (props) =>{
  console.log(props.questions)
    return(
      <div>
        <GameBoard gameQuestions={props.questions}/>
      </div>
    )
}

export default Game;
