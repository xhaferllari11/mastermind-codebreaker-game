import React, { Component } from 'react';
import './App.css';
import GamePage from '../GamePage/GamePage';
import SettingsPage from '../SettingsPage/SettingsPage';
import HighScorePage from '../HighScorePage/HighScorePage';
import { index, create } from '../../utils/scoreService';
import { Switch, Route, withRouter } from 'react-router-dom';

const colors = {
  'Easy': ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD'],
  'Moderate': ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD', '#BB821D'],
  'Difficult': ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD', '#BB821D', '#F0E141']
};

const difficultyOp = ['Easy', 'Moderate', 'Difficult'];

class App extends Component {
  constructor() {
    super();
    this.state = this.getInitialState();
    this.state.difficulty = 'Easy';
    this.state.highScores = [];
  }
  
  componentDidMount() {
    this.populateHighScores();
  };
  
  componentDidUpdate() {
  }

  componentWillUnmount() {
    console.log('will unmount');
  }


  populateHighScores() {
    index().then(data => {
      this.setState({ highScores: data })
    });
  }


  getInitialState() {
    return {
      selColorIdx: 0,
      guesses: [this.getNewGuess()],
      code: this.genCode(),
      elapstedTime: 0
    };
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
    // if winner, return num guesses, otherwise 0 (no winner)
    let lastGuess = this.state.guesses.length - 1;
    return this.state.guesses[lastGuess].score.perfect === 4 ? lastGuess + 1 : 0;
  }

  handleTimerUpdate = () => {
    this.setState((state) => ({ elapstedTime: ++state.elapstedTime }));
  }


  handleColorSelection = (colorIdx) => {
    this.setState({ selColorIdx: colorIdx });
  }

  handleNewGameClick = () => {
    this.setState(this.getInitialState());
    // then Route to home page '/'
  }

  handlePegClick = (pegIdx) => {
    // Get index of last guess object
    let currentGuessIdx = this.state.guesses.length - 1;

    // Always replace objects/arrays with NEW ones
    let guessesCopy = [...this.state.guesses];
    let guessCopy = { ...guessesCopy[currentGuessIdx] };
    let codeCopy = [...guessCopy.code];

    // Update the NEW code array with the currently selected color
    codeCopy[pegIdx] = this.state.selColorIdx;

    // Update the NEW guess object
    guessCopy.code = codeCopy;

    // Update the NEW guesses array
    guessesCopy[currentGuessIdx] = guessCopy;

    // Update state with the NEW guesses array
    this.setState({
      guesses: guessesCopy
    });
  }

  handleScoreClick = () => {
    let currentGuessIdx = this.state.guesses.length - 1;
    let guessCodeCopy = [...this.state.guesses[currentGuessIdx].code];
    let secretCodeCopy = [...this.state.code];
    let perfect = 0, almost = 0;
    // First pass computes number of "perfect"
    guessCodeCopy.forEach((code, idx) => {
      if (secretCodeCopy[idx] === code) {
        perfect++;
        // Ensure same choice is not matched again
        // by updating both elements in the "working"
        // arrays to null
        guessCodeCopy[idx] = secretCodeCopy[idx] = null;
      }
    });

    // Second pass computes number of "almost"
    guessCodeCopy.forEach((code, idx) => {
      if (code === null) return;
      let foundIdx = secretCodeCopy.indexOf(code);
      if (foundIdx > -1) {
        almost++;
        //ensure same choice is not matched again
        secretCodeCopy[foundIdx] = null;
      }
    });

    let guessesCopy = [...this.state.guesses];
    let guessCopy = { ...guessesCopy[currentGuessIdx] };
    let scoreCopy = { ...guessCopy.score };

    // Set scores
    scoreCopy.perfect = perfect;
    scoreCopy.almost = almost;
    guessCopy.score = scoreCopy;
    guessesCopy[currentGuessIdx] = guessCopy;


    if (perfect !== 4) {
      guessesCopy.push(this.getNewGuess())
    } else if (perfect === 4) {
      // winner logic
      let initials = prompt('enter initials');
      let highScore = {
        initials: initials,
        guesses: guessesCopy.length,
        seconds: this.state.elapstedTime
      };
      //persist to database
      create(highScore).then((data) => {
        // route to new page
        console.log('Success:', data);
        this.populateHighScores();
        this.props.history.push('/high-scores')
      }).catch((error) => {
          console.error('Error:', error);
      });
    }

    this.setState({
      guesses: guessesCopy
    });
  }

  handleDifficultyClick = (d) => {
    this.setState({ difficulty: d }, this.handleNewGameClick())
  }

  render() {
    let winTries = this.getWinTries();
    return (
      <div className="App">
        <header className='App-header-footer'>R E A C T &nbsp;&nbsp;&nbsp;  M A S T E R M I N D</header>
        <Switch>
          <Route exact path='/' render={(props) => (
            <GamePage
              {...props}
              winTries={winTries}
              colors={colors[this.state.difficulty]}
              selColorIdx={this.state.selColorIdx}
              guesses={this.state.guesses}
              handleColorSelection={this.handleColorSelection}
              handleNewGameClick={this.handleNewGameClick}
              handlePegClick={this.handlePegClick}
              handleScoreClick={this.handleScoreClick}
              timer={this.state.elapstedTime}
              handleTimerUpdate={this.handleTimerUpdate}
            />
          )} />
          <Route path='/settings' render={(props) => (
            <SettingsPage
              {...props}
              currentDifficulty={this.state.difficulty}
              difficultyOp={difficultyOp}
              colors={colors}
              handleDifficultyClick={this.handleDifficultyClick}
            />
          )}
          />
          <Route path='/high-scores' render={(props) => (
            <HighScorePage highScores={this.state.highScores} />
          )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);



