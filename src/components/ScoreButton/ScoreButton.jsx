import React from 'react';
import styles from './ScoreButton.module.css';

const ScoreButton = (props) => {
  function handleScoreClick(){
    props.handleScoreClick();
    console.log(props);
  }

  return (<button
    className={`${styles.button} btn btn-default`}
    disabled={props.disabled}
    onClick={() => handleScoreClick()}
  >
    ✔
  </button>)
};

export default ScoreButton;
