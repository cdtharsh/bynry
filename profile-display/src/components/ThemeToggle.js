// src/components/ThemeToggle.js
import React from 'react';

const ThemeToggle = ({ toggleTheme }) => (
  <button onClick={toggleTheme} style={{ padding: '10px', margin: '20px' }}>
    Toggle Theme
  </button>
);

export default ThemeToggle;
