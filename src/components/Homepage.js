import React from 'react';
import { Link } from 'react-router-dom'

const Homepage = (props) => {
  return(
    <div>
      <Link to='game'><button onClick={props.start}>Play</button></Link>
      <select id="selected">
        <option value="art">Art</option>
        <option value="animals">Animals</option>
      </select>

    </div>
  )
}

export default Homepage;
