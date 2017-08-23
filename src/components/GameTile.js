import React from 'react';
import {Grid, Segment} from 'semantic-ui-react'

class GameTile extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      display: props.val,
      questionInSession: false,
      questionAnswered: false,
      userInput: ''
    }
  }

  showQuestion = (event) => {
    let id = parseInt(event.target.dataset.tileId)
    if(this.state.questionInSession === false && !this.props.prevQuestions.includes(id) && this.props.otherQuestionInSession === false){
    this.setState({
      display: this.props.question[0],
      questionInSession: true
      })
    this.props.changeOtherQuestionInSession(true)
    this.props.addToPreviousQuestions(id)
    }
  }

  checkAnswer = (event) => {
    let input = document.getElementById(`${this.props.val}`).value.toLowerCase()
    if (input !== '') {
      let correctAnswer = this.props.question[1].toLowerCase()
      let score = input === correctAnswer ? this.props.val : 0 - this.props.val
      score > 0 ? this.colorDiv("green") : this.colorDiv("red")
      this.props.addToScore(score)
      this.setState({
        questionInSession: false,
        questionAnswered: true,
        userInput: input
      })
      this.props.changeOtherQuestionInSession(false)
    }
  }

  colorDiv(val){
    document.getElementById(this.props.index).style.background = val
  }

  render(){
    return(
          <div id={this.props.index}>
          <div id="question">
              <h3 data-tile-id={this.props.index} onClick={this.showQuestion} id="q">{this.state.display} </h3>

          <div id="inputField">
            {this.state.questionInSession &&
            <div><input id={this.props.val} type="text" />
              <button onClick={this.checkAnswer}>Submit</button>
            </div>}
          </div>

            {this.state.questionAnswered &&
              <div>
                <p>Correct Answer: {this.props.question[1]}</p>
                <p>User Input: {this.state.userInput}</p>
              </div>}
            </div>
          </div>
    )
  }
}

export default GameTile;
