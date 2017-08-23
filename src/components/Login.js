import React from 'react'

const LogIn = (props) => {
  return(
    <div>
      <h1>Log In!</h1>
      <input type="text" name="Username" id="lusername" placeholder="Username"/>
      <input type="text" name="Password" id="lpassword" placeholder="Password"/>
      <button onClick={props.login}>Login</button>
    </div>
  )
}

export default LogIn
