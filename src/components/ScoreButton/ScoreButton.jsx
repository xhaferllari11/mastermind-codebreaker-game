import React from 'react';
import styles from './ScoreButton.module.css';

let buttonStyle = {
  cursor: 'not-allowed',
  pointerEvents: 'none'
}

const ScoreButton = (props) => (
  <button 
    className={`${styles.button} btn btn-default`}
    style={(props.code.every(e=> e !== null)) ? {} : buttonStyle}
    onClick={() => props.handleScoreClick()}
  >
    ✔
  </button>
);

export default ScoreButton;
