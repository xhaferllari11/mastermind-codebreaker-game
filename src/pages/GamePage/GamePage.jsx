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
    </div>
  );
};

export default GamePage;