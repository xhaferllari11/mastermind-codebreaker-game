import React from 'react';
import styles from './ScoreButton.module.css';

let buttonStyle = {
  cursor: 'not-allowed'
}

const ScoreButton = (props) => (
  <button 
    className={`${styles.button} btn btn-default`}
    // style={(props.code.every(e=>!null)) ? buttonStyle : {}}
  >
    ✔
  </button>
);

export default ScoreButton;
