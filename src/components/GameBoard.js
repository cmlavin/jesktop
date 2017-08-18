import React from 'react';
import GameTile from './GameTile'

const GameBoard = (props) => {
  return(
    <div>
      <p>Hello World</p>
      {props.gameQuestions.map(question => {
        return <GameTile question={question} />
      })}
    </div>
  )
}

export default GameBoard;
