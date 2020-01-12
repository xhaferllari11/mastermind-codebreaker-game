import React from 'react';
import GuessPeg from '../GuessPeg/GuessPeg';
import './GuessPegs.css';

const GuessPegs = (props) => (
  <div className='GuessPegs'>
    <GuessPeg
      color={props.colors[props.code[0]]}
      currentGuess={props.currentGuess}
      handlePegSelection={() => props.handlePegSelection(0)}
    />
    <GuessPeg
      color={props.colors[props.code[1]]}
      currentGuess={props.currentGuess}
      handlePegSelection={() => props.handlePegSelection(1)}
    />
    <GuessPeg
      color={props.colors[props.code[2]]}
      currentGuess={props.currentGuess}
      handlePegSelection={() => props.handlePegSelection(2)}
    />
    <GuessPeg
      color={props.colors[props.code[3]]}
      currentGuess={props.currentGuess}
      handlePegSelection={() => props.handlePegSelection(3)}
    />
  </div>
);

export default GuessPegs;
