import React from 'react';
import GameTile from './GameTile'
import {Grid, Segment} from 'semantic-ui-react'

class GameBoard extends React.Component{
  constructor(){
    super()
    this.state = {
      questions: [],
      randVals: [],
      display: [],
      questionIndex: 10,
      questionInSession: false
    }
    this.checkAnswer = this.checkAnswer.bind(this)
  }


componentWillReceiveProps(nextProps){
  this.setState({
    questions: nextProps,
  }, () => {
    let vals = this.generateValues()
    this.setState({
      randVals: vals,
      display: vals
    })
  })
}

 getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

generateValues(){
    var randVals = this.state.questions.gameQuestions.map((question) => this.getRandomIntInclusive(0, 500))
    console.log(randVals)
    return randVals
}

showQuestion = (event) => {
  if(this.state.questionInSession === false){
  let id = parseInt(event.target.parentElement.id)
  let disp = this.state.display
  disp[id] = this.state.questions.gameQuestions[id][0]
  this.setState({
    display: disp,
    questionInSession: true,
    questionIndex: id
  })}
}

handleSubmit = (event) => {
  this.setState({
    questionInSession: false
  })
  let input = document.getElementById('input').value.toLowerCase()
  let id = this.state.questionIndex
  this.checkAnswer(input, id)
}

checkAnswer = (input, id) => {
  let answer = this.state.questions.gameQuestions[id][1].toLowerCase()
  if(answer === input){

  }else if(answer !== input){
    
  }
}

render(){
  return(
    <div className="ui grid">
      {this.state.questions.length !== 0 && this.state.display.map((val, index) => {
        return <GameTile display={val} index={index} showQuestion={this.showQuestion}/>
      })}
      {this.state.questionInSession &&
        <div>
         <input id="input" type="text"/>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>}
    </div>
  )}
}

export default GameBoard;
