import React from 'react';
import {Grid, Segment} from 'semantic-ui-react'

class GameTile extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      display: props.val,
      questionInSession: false
    }
  }

  showQuestion = (event) => {
    let id = parseInt(event.target.dataset.tileId)
    if(this.state.questionInSession === false && !this.props.prevQuestions.includes(id)){
    this.setState({
      display: this.props.question[0],
      questionInSession: true
      })
    this.props.addToPreviousQuestions(id)
    }
  }

  checkAnswer = (event) => {
    let input = document.getElementById(`${this.props.val}`).value.toLowerCase()
    let correctAnswer = this.props.question[1].toLowerCase()
    let score = input === correctAnswer ? this.props.val : 0 - this.props.val
    this.props.addToScore(score)
    this.setState({
      questionInSession: false
    })
  }

  render(){
    return(
          <div id={this.props.index}>
            <h3 id="question" data-tile-id={this.props.index} onClick={this.showQuestion}>{this.state.display} </h3>
            {this.state.questionInSession && <div><input id={this.props.val} type="text" />
            <button onClick={this.checkAnswer}>Submit</button></div>}
          </div>
    )
  }
}

export default GameTile;
