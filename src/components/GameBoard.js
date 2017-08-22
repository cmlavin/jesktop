import React from 'react';
import GameTile from './GameTile'
import {Grid, Segment} from 'semantic-ui-react'
import Loading from './Loading'

class GameBoard extends React.Component{
  constructor(){
    super()
    this.state = {
      display: [],
      questionIndex: 10,
      prevQuestions: [],
      otherQuestionInSession: false,
      score: 0
    }
  }

componentWillReceiveProps({questions, randVals}){
  this.setState({ display: randVals.slice(0) })
}

addToPreviousQuestions = (id) => {
  this.setState({
    prevQuestions: [...this.state.prevQuestions, id]
  },() => console.log(this.state.prevQuestions))
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

changeOtherQuestionInSession = (bool) =>{
  this.setState({
    otherQuestionInSession: bool
  })
}

tilesToDisplay = () => {
 return this.state.display.map((val, index) => {
    return (
      <div className="four wide column">
        <GameTile val={val} index={index}  prevQuestions={this.state.prevQuestions} question={this.props.questions[index]} addToPreviousQuestions={this.addToPreviousQuestions} addToScore={this.addToScore} otherQuestionInSession={this.state.otherQuestionInSession} changeOtherQuestionInSession={this.changeOtherQuestionInSession}/>
      </div>
  )})
}

showTiles = () => {
  if(this.state.display.length === 0){
    return (
      <Loading />
    )
  }else{
    let tilesToDisplay = this.tilesToDisplay()
    let mat = [[0,1,2], [3,4,5], [6,7,8]]
    let tileArrangement = mat.map(arr => arr.map(num => tilesToDisplay[num]))
    return(
    <div className="ui grid" id="grid">
      <div className="three wide column" id="row">
        {tileArrangement[0]}
      </div>
      <div className="three wide column" id="row">
        {tileArrangement[1]}
      </div>
      <div className="three wide column" id="row">
        {tileArrangement[2]}
      </div>
    </div>
    )
  }
}


render(){
    return(
    <div>
      <div>
        {this.showTiles()}
        <h3>Score: {this.state.score}</h3>
      </div>
    </div>
    )
  }
}

export default GameBoard;
