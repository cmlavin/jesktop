import React from 'react';
import { Button, Select } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Homepage = (props) => {
  var sourceFile = require('./options');
  let options = sourceFile.options
  return(
    <div>
    <div id="buttonContainer">
    {props.userData.length === 0 && <div>
    <Link to={"/login"}><Button id="login">Login</Button></Link>
    <Link to={"/sign_up"}><Button id="signup">Signup</Button></Link>
    </div>}

    {props.userData.length !== 0 && <div>
    <Link to={"/"}><Button id="logout">Login</Button></Link>
    </div>}

    </div>
      <div id="homepage">
        <div>
          <h1 id="title">Jesktop!!</h1>
          <h3 id="quote">Jeopardy for your Desktop.</h3>
          {props.categorySelected && <Link to={props.category}><Button onClick={props.start}>Play</Button></Link>}
          <Select id="selected" options={options} onChange={props.changeCategory}/>
          <h1></h1>
          </div>
      </div>
      <p id="creators">Made by: Catherine & DJ</p>
    </div>
  )
}

export default Homepage;
