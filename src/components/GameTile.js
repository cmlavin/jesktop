import React from 'react';
import {Grid, Segment} from 'semantic-ui-react'

const GameTile = (props) => {
  
  return(
    <div className="five wide column" >
      <p>{props.question}</p>
      <p>{props.value(0, 500)}</p>
    </div>
  )
}

export default GameTile;
