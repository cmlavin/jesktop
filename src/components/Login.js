import React from 'react'

const Login = (props) => {
  return(
    <div>
      <input type="text" name="Username" id="username" placeholder="Username"/>
      <input type="text" name="Password" id="password" placeholder="Password"/>
      <button onClick={props.login}>Login</button>
    </div>
  )
}

export default Login;
