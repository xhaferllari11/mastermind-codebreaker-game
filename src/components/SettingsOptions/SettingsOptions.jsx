import React from 'react';
import { Link } from 'react-router-dom';
import './SettingsOptions.css'
import GuessPeg from '../GuessPeg/GuessPeg'

const SettingsOptions = (props) => {
    return (
        <div className='settings-colors'>
            <Link className='btn btn-default difficulty-options'>
                {props.difficulty}
            </Link>
            {props.colors.map( c => 
                <GuessPeg color={c} key={c}/>
            )}
        </div>
    )
}

export default SettingsOptions;