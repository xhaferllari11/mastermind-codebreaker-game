import React from 'react';
import { Link } from 'react-router-dom';
import './SettingsPage.css'
import SettingsOptions from '../../components/SettingsOptions/SettingsOptions';

const SettingsPage = (props) => {

    return (
        <div className='settings-page'>
            <h1>Set Difficulty Level</h1>
            {props.difficultyOp.map( (diff,index) => 
                <SettingsOptions
                    {...props}
                    currentDifficulty={diff===props.currentDifficulty}
                    difficulty={diff}
                    colors={props.colors[diff]}
                    handleDifficultyClick={props.handleDifficultyClick}
                    key={index}
                />
            )}
            <Link
                to='/'
                className='btn btn-default'
            >Cancel</Link>
            
        </div>
    );

};

export default SettingsPage;