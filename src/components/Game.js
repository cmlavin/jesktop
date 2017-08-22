import React from 'react';
import GameBoard from './GameBoard'
import {Grid, Segment} from 'semantic-ui-react'


const Game = (props) =>{
  console.log(props.questions)
    return(
      <div>
        <Grid>
          <GameBoard questions={props.questions} randVals={props.randomValues}/>
        </Grid>
      </div>
    )
}

export default Game;
