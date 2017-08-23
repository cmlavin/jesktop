import React from 'react'

const SignUp = (props) => {
  return(
    <div>
      <h1>Sign Up!!!</h1>
      <input type="text" name="Username" id="username" placeholder="Username"/>
      <input type="text" name="Password" id="password" placeholder="Password"/>
      <button onClick={props.sign_up}>Sign Up</button>
    </div>
  )
}

export default SignUp;
