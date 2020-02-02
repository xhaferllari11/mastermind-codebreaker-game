import React from 'react';
import GameBoard from '../../components/GameBoard/GameBoard';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import GameTimer from '../../components/GameTimer/GameTimer';
import NewGameButton from '../../components/NewGameButton/NewGameButton';
import { Link } from 'react-router-dom';
import './GamePage.css'

const GamePage = (props) => {
  return (
    <div className="App">
      <div className="flex-h align-flex-end">
        <GameBoard
          {...props}
          colors={props.colors}
          guesses={props.guesses}
          handlePegClick={props.handlePegClick}
          handleScoreClick={props.handleScoreClick}
        />
        <div className='App-controls'>
          <ColorPicker
            colors={props.colors}
            selColorIdx={props.selColorIdx}
            handleColorSelection={props.handleColorSelection}
          />
          <GameTimer
            timer={props.timer}
            handleTimerUpdate={props.handleTimerUpdate}
            winTries={props.winTries}
          />
          <Link
            className='btn btn-default Gamepage-link-margin'
            to='/high-scores'
          >High Scores</Link>
          <Link
            className='btn btn-default Gamepage-link-margin'
            to='/settings'
          >Settings</Link>
          <NewGameButton handleNewGameClick={props.handleNewGameClick}/>
        </div>
      </div>
      <footer className='App-header-footer'>
        {(props.winTries ? `You Won in ${props.winTries} Guesses!` : 'Good Luck!')}
      </footer>
      <section style={{textAlign: 'center'}}>
        <h3>How to play</h3>
        <hr/>
        <p>Goal: Guess the hidden combination.</p>
        <p>The score tells you how close you got</p>
        <p>Full circle: one of your guess is correct color and correct location.</p>
        <p>Empty circle: you guessed a color correct, but in the wrong location.</p>
        <p>Full rules about the game: <a href="https://en.wikipedia.org/wiki/Mastermind_(board_game)">Here</a></p>
      </section>
    </div>
  );
};

export default GamePage;