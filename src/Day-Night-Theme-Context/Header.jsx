

import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './Header.css';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
            <button onClick={toggleTheme}>Toggle button</button>
            <h1 style={{ backgroundColor:'white' }}>Current Theme: {theme}</h1>
        </header>
    );
};

export default Header;
