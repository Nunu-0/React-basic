import React from 'react';
import style from './header.module.css';

const Header = ({onLogout}) => {
    <header>
        {onLogout && (
            <button onClick={onLogout}>Logout</button>)}
        <img src="/images/logo.png" alt="logo" />
        <h1>Business Card Maker</h1>
    </header>
};

export default Header;