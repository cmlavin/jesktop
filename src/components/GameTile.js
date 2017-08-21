import React from 'react';
import {Grid, Segment} from 'semantic-ui-react'

const GameTile = (props) => {

  return(
    <div className="five wide column" id="col">
        <div id={props.index}>
          <div className="ui card" >
            <div className="content">
              <div className="description">
                <h3 onClick={props.showQuestion}>{props.display}</h3>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default GameTile;
