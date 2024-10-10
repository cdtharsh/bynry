import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App';
import { ThemeProvider } from './context/ThemeContext'; // Import the ThemeProvider
import './styles/App.css'; // Ensure your styles are imported

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
