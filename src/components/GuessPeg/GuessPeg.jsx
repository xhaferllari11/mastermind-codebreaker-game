import React from 'react';
import styles from './GuessPeg.module.css';

const GuessPeg = (props) => (
  <div
    className={styles.peg}
    style={{
      backgroundColor: props.color,
      border: props.color ? `1px solid ${props.color}`: '1px dashed grey',
      cursor: (props.currentGuess) ? 'pointer' : 'default'
    }}
    
    onClick = {(props.currentGuess) ? () => props.handlePegSelection() : () => console.log('pass')}
    />
);

export default GuessPeg;
