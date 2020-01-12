import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import GameTimer from './components/GameTimer/GameTimer';
import NewGameButton from './components/NewGameButton/NewGameButton';

const colors = ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD'];

class App extends Component {
  constructor() {
    super();
    this.state = this.getInitialState();
  }

  getNewGuess() {
    return {
      code: [null, null, null, null],
      score: {
        perfect: 0,
        almost: 0
      }
    };
  }

  genCode() {
    return new Array(4).fill().map(dummy => Math.floor(Math.random() * 4));
  }

  getWinTries() {
    let lastGuess = this.state.guesses.length - 1;
    return this.state.guesses[lastGuess].score.perfect === 4 ? lastGuess + 1 : 0;
  }

  handleColorSelection = (colorIdx) => {
    this.setState({selColorIdx: colorIdx});
  }

  getInitialState() {
    return {
      selColorIdx: 0,
      guesses: [this.getNewGuess()],
      code: this.genCode()
    };
  }

  handlePegSelection = (index) => {
    let currGuesses = this.state.guesses;
    currGuesses[currGuesses.length-1].code[index] = this.state.selColorIdx;
    this.setState({
      guesses: currGuesses
    })
  }

  handleScoreClick = () => {
    let guesses = this.state.guesses;
    let lastGuess = guesses[guesses.length-1];
    let perfectGuesses = [false,false,false,false];
    let hiddenCode = this.state.code;
    lastGuess.code.forEach(function(el,ind) {
      if (el === hiddenCode[ind]) {
        perfectGuesses[ind] = true;
      }
    });
    let codeNotPerfect = hiddenCode.filter((e,ind)=>{
      return (perfectGuesses[ind] === false);
    });
    lastGuess.score.perfect = 4 - codeNotPerfect.length;
    let guessNotPerfect = lastGuess.code.filter((e,ind)=>{
      return (perfectGuesses[ind] === false);
    });
    let almosts = 0;
    codeNotPerfect.forEach((el,ind) => {
      if (guessNotPerfect.includes(el)){
        almosts += 1;
        guessNotPerfect.splice(guessNotPerfect.indexOf(el),1);
      }
    })
    lastGuess.score.almost = almosts;
    guesses[guesses.length-1] = lastGuess;
    if (lastGuess.score.perfect < 4 ) {
      guesses.push(this.getNewGuess())
    } 
    this.setState({guesses: guesses}); 
  }

  newGame = () => {
    this.setState(this.getInitialState());
  }

  render() {
    let winTries = this.getWinTries();
    return (
      <div className="App">
        <header className='App-header-footer'>R E A C T &nbsp;&nbsp;&nbsp;  M A S T E R M I N D</header>
        <div className="flex-h align-flex-end">
          <GameBoard
            colors={colors}
            guesses={this.state.guesses}
            handlePegSelection={this.handlePegSelection}
            handleScoreClick={this.handleScoreClick}
          />
          <div className='App-controls'>
            <ColorPicker
              colors={colors}
              selColorIdx={this.state.selColorIdx}
              handleColorSelection={this.handleColorSelection}
            />
            <GameTimer />
            <NewGameButton newGame = {this.newGame}/>
          </div>
        </div>
        <footer className='App-header-footer'>
          {(winTries ? `You Won in ${winTries} Guesses!` : 'Good Luck!')}
        </footer>
      </div>
    );
  }
}

export default App;
