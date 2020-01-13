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
                    difficulty={diff}
                    colors={props.colors[diff]}
                    key={index}
                />
            )}
            
            <Link
                to='/'
                className='btn btn-default'
            >Home</Link>
            
        </div>
    );

};

export default SettingsPage;