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
      prevQuestions: [],
      questionInSession: false,
      score: 0
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
  let id = parseInt(event.target.parentElement.id)
  if(this.state.questionInSession === false && !this.state.prevQuestions.includes(id)){
  let disp = this.state.display
  disp[id] = this.state.questions.gameQuestions[id][0]
  let div = document.getElementById(id)
  div.style.background = "yellow"
  this.setState({
    display: disp,
    questionInSession: true,
    questionIndex: id,
    prevQuestions: [...this.state.prevQuestions, id]
  })}
}

handleSubmit = (event) => {
  this.setState({
    questionInSession: false
  })
  let div = document.getElementById(this.state.questionIndex)
  div.style.background = "white"
  let input = document.getElementById('input').value.toLowerCase()
  let id = this.state.questionIndex
  this.submitAnswer(input, id)
}

submitAnswer = (input, id) => {
  let answer = this.state.questions.gameQuestions[id][1].toLowerCase()
  debugger
  if(answer === input){

  } else if(answer !== input){

  }
}

checkAnswer = (event) => {
  let input = event.target.value
  let correctAnswer = this.state.questions.gameQuestions[this.state.questionIndex][1].toLowerCase()
  let div = document.getElementById(this.state.questionIndex)
  if (input === ""){
    div.style.color = "black"
  }else if(correctAnswer.includes(input)){
    div.style.color = "green"
  }else if (!correctAnswer.includes(input)) {
    div.style.color = "red"
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
         <input onChange={this.checkAnswer} id="input" type="text"/>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>}
    </div>
  )}
}

export default GameBoard;
