import React from 'react';
import { Link } from 'react-router-dom';

const SettingsPage = (props) => {

    return (
        <>
            <Link
                to='/'
                className='btn btn-default'
            >Home</Link>
            <h1>Settings Page</h1>
        </>
    );

};

export default SettingsPage;