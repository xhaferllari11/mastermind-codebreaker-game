import React from 'react';
import './SettingsOptions.css'
import GuessPeg from '../GuessPeg/GuessPeg'

const SettingsOptions = (props) => {

    function handleDifficultyClick(d){
        props.handleDifficultyClick(d);
        props.history.push('/');
    }

    return (
        <div className='settings-colors'>
            <button 
                className='btn btn-default difficulty-options'
                disabled={props.currentDifficulty}
                onClick={() => handleDifficultyClick(props.difficulty)}
            >
                {props.difficulty}
            </button>
            {props.colors.map( c => 
                <GuessPeg color={c} key={c}/>
            )}
        </div>
    )
}

export default SettingsOptions;