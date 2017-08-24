import React from 'react'
import { Link } from 'react-router-dom'


const LogIn = (props) => {
  return(
    <div>
      <h1>Log In!</h1>
      <input type="text" name="Username" id="lusername" placeholder="Username"/>
      <input type="text" name="Password" id="lpassword" placeholder="Password"/>
      <Link to={"/"}><button onClick={props.login} type="submit">Login</button></Link>
    </div>
  )
}

export default LogIn
