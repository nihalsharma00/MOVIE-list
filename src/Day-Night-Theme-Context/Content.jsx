import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './Content.css';

const Content = () => {
    const { theme } = useContext(ThemeContext);
    const themeClass = theme === 'light' ? 'light-theme' : 'dark-theme';

    return (
        <div className={`content-container ${themeClass}`}>
            <p>This is the content area. The current theme is {theme}.</p>
        </div>
    );
};

export default Content;
