import React from 'react';
import GameTile from './GameTile'
import {Grid, Segment} from 'semantic-ui-react'

class GameBoard extends React.Component{
  constructor(){
    super()
    this.state = {
      questions: []
    }
  }


componentWillReceiveProps(nextProps){
  this.setState({
    questions: nextProps
  })
}

 getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

render(){
  //debugger
  return(
    <div className="ui grid">
      {this.state.questions.length !== 0 && this.state.questions.gameQuestions.map((question, index) => {
        return <GameTile question={question} value={this.getRandomIntInclusive}/>
      })}
    </div>
  )}
}

export default GameBoard;
