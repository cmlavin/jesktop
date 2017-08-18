import React from 'react';

const Game = (props) =>{
  console.log(props.questions)
    return(
      <div>
        <p>hello{props.questions}</p>
      </div>
    )
}

export default Game;
