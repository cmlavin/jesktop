import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './components/Homepage'
import Game from './components/Game'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      questions: [],
      tempQuestions: [],
      category: '',
      something: false
    }
    this.startGame = this.startGame.bind(this)
  }

  startGame = () => {
    let category = document.getElementById('selected').value;
    this.fetchHandler(category);
  }

  fetchHandler = (category) => {
    fetch(`http://cocktail-trivia-api.herokuapp.com/api/category/${category}`)
    .then(resp => resp.json())
    .then(data => this.setState({
      questions: data
    }, () => {console.log(this.state.questions)}))
    .then(() => window.location = window.location.href + 'game')
  }


  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' render={() => <Homepage start={this.startGame}/>} />
            <Route exact path='/game' render={() => <Game questions={this.state.questions}/>} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
