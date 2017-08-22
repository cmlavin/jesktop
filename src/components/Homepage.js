import React from 'react';
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Select } from 'semantic-ui-react'

const Homepage = (props) => {
  var sourceFile = require('./options');
  let options = sourceFile.options
  return(
    <div id="homepage">
      <div>
        <h1 id="title">Jesktop!!</h1>
        <h3 id="quote">Jeopardy for your Desktop.</h3>
      </div>

      {props.categorySelected && <Link to={props.category}><Button onClick={props.start}>Play</Button></Link>}
      <Select id="selected" options={options} onChange={props.changeCategory}/>
      <p id="creators">Made by: Catherine & DJ</p>

    </div>
  )
}
export default Homepage;
