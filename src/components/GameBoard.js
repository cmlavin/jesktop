import React from 'react';
import GameTile from './GameTile'
import {Grid, Segment} from 'semantic-ui-react'

class GameBoard extends React.Component{
  constructor(){
    super()
    this.state = {
      display: [],
      questionIndex: 10,
      prevQuestions: [],
      questionInSession: false,
      score: 0
    }
    this.checkAnswer = this.checkAnswer.bind(this)
    this.showQuestion = this.showQuestion.bind(this)
  }

componentWillReceiveProps({questions, randVals}){
  this.setState({
    display: randVals.slice(0)
  })
}

showQuestion = (event) => {
  let id = parseInt(event.target.parentElement.parentElement.parentElement.parentElement.id)
  if(this.state.questionInSession === false && !this.state.prevQuestions.includes(id)){
  let disp = this.state.display
  disp[id] = this.props.questions[id][0]
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
  let answer = this.props.questions[id][1].toLowerCase()
  let correctAnswer = this.state.score + this.props.randVals[id]
  let wrongAnswer = this.state.score - this.props.randVals[id]
  let score = answer === input ? correctAnswer : wrongAnswer
  this.setState({ score })
}

checkAnswer = (event) => {
  let input = event.target.value.toLowerCase()
  let correctAnswer = this.props.questions[this.state.questionIndex][1].toLowerCase()
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
      {(this.props.questions.length === this.state.prevQuestions.length && !this.state.questionInSession) && <h1>Game Over</h1>}
    </div>
  )}
}

export default GameBoard;
