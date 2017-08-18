import React from 'react';

const Homepage = (props) => {
  return(
    <div>
      <button onClick={props.start}>Play</button>
      <select id="selected">
        <option value="art">Art</option>
        <option value="animals">Animals</option>
      </select>

    </div>
  )
}

export default Homepage;
