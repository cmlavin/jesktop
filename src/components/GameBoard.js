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
      score: 0
    }
    this.addToPreviousQuestions = this.addToPreviousQuestions.bind(this)
  }

componentWillReceiveProps({questions, randVals}){
  this.setState({ display: randVals.slice(0) })
}

addToPreviousQuestions = (id) => {
  this.setState({
    prevQuestions: [...this.state.prevQuestions, id]
  })
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


addToScore = (val) => {
  this.setState({
    score: this.state.score + val
  }, () => console.log(this.state.score))
}

showTiles = () => {
  if(this.state.display.length === 0){
    return (
      <div className="ui segment" id="loading">
          <div className="ui active dimmer">
            <div className="ui massive text loader">Loading</div>
        </div>
      <p></p>
    </div>
    )
  }else{
    let tilesToDisplay = this.state.display.map((val, index) => {
        return (
          <div className="five wide column" id="col">
          <GameTile val={val} index={index}  prevQuestions={this.state.prevQuestions} question={this.props.questions[index]} addToPreviousQuestions={this.addToPreviousQuestions} addToScore={this.addToScore}/>
          </div>
        )
        })
    return(
    <div>
      {tilesToDisplay}
    </div>
    )
  }
}


render(){
    return(
      <div>
        {this.showTiles()}
        <h3>Score: {this.state.score}</h3>
      </div>
    )
  }
}

export default GameBoard;
