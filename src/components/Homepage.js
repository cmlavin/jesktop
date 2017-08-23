import React from 'react';
import { Button, Select } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Homepage = (props) => {
  var sourceFile = require('./options');
  let options = sourceFile.options
  return(
    <div>
    <div id="buttonContainer">
      <Link to={"/login"}><Button id="login">Login</Button></Link>
      <Button id="signup">Signup</Button>
    </div>
      <div id="homepage">
        <div>
          <h1 id="title">Jesktop!!</h1>
          <h3 id="quote">Jeopardy for your Desktop.</h3>
          {props.categorySelected && <Link to={props.category}><Button onClick={props.start}>Play</Button></Link>}
          <Select id="selected" options={options} onChange={props.changeCategory}/>
          </div>
      </div>


      <p id="creators">Made by: Catherine & DJ</p>

    </div>
  )
}

export default Homepage;

// <Modal trigger={<Button>Basic Modal</Button>} basic size='small'>
// <Header icon='user' content='Login' />
//   <Modal.Content>
//     <p>Please login</p>
//     <form>
//       <input type="text"/>
//       <input type="text"/>
//     </form>
//   </Modal.Content>
//   <Modal.Actions>
//     <Button basic color='green' inverted>
//       Login
//     </Button>
//   </Modal.Actions>
//   </Modal>
