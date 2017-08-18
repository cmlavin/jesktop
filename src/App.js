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
      category: ''
    }
    this.startGame = this.startGame.bind(this)
  }

  startGame = () => {
    let category = document.getElementsByClassName('text')[0].innerHTML.toLowerCase()
    this.fetchHandler(category);

  }

  encode = (string) => {
    var encodedStr = string

    var parser = new DOMParser;
    var dom = parser.parseFromString(
        '<!doctype html><body>' + encodedStr,
        'text/html');
    var decodedString = dom.body.textContent;
    return decodedString
  }

  fetchHandler = (category) => {
    
    fetch(`http://cocktail-trivia-api.herokuapp.com/api/category/${category}`)
    .then(resp => resp.json())
    .then(data => {
      return data.map((question) => {
        let q = this.encode(question.text)
        let answer = this.encode(question.answers.filter(answers => answers.correct === true)[0].text)
        return [q, answer]
      })
    })
    .then(data => this.setState({
      questions: data
    }, () => {console.log(this.state.questions)}
  ))
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
