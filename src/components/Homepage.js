import React from 'react';
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Select } from 'semantic-ui-react'

const Homepage = (props) => {
  
  let options = [
    { value:'art', text: 'Art'},
    { value:'animals', text: 'Animals'}
  ]
  return(
    <div>
      <Link to='game'><Button onClick={props.start}>Play</Button></Link>
      <Select id="selected"
        options={options}
      />

    </div>
  )
}

export default Homepage;

// <option value="art">Art</option>
// <option value="animals">Animals</option>
