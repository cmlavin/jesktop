import React from 'react'
import {Grid, Segment} from 'semantic-ui-react'


const Loading = () => {
  return(
    <div className="ui segment" id="loading">
        <div className="ui active dimmer">
          <div className="ui massive text loader">Loading</div>
      </div>
    <p></p>
  </div>
  )
}

export default Loading;
