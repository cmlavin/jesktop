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

componentWillReceiveProps({questions, randVals}){
  this.setState({ questions, randVals}, () => this.setState({
    display: this.state.randVals.slice(0)
  }))
}

showQuestion = (event) => {
  let id = parseInt(event.target.parentElement.id)
  if(this.state.questionInSession === false && !this.state.prevQuestions.includes(id)){
  let disp = this.state.display
  disp[id] = this.state.questions[id][0]
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
  let answer = this.state.questions[id][1].toLowerCase()
  debugger
  let score = this.state.score + this.state.randVals[id]
  if(answer === input){
    this.setState({
      score: score
    })
  } else if(answer !== input){

  }
}

checkAnswer = (event) => {
  let input = event.target.value
  let correctAnswer = this.state.questions[this.state.questionIndex][1].toLowerCase()
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
      {this.state.display.map((val, index) => {
        return <GameTile display={val} index={index} showQuestion={this.showQuestion}/>
      })}
      {this.state.questionInSession &&
        <div>
         <input onChange={this.checkAnswer} id="input" type="text"/>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>}
      <h1>Score: {this.state.score}</h1>
    </div>
  )}
}

export default GameBoard;
