import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import UserDetails from '../pages/UserDetails';
import Admin from '../pages/Admin';
import '../styles/App.css';
import '../styles/global.css';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Effect to apply the theme class to the body element
  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
    document.body.classList.toggle('light', theme === 'light');
  }, [theme]);

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Navbar />
        <button className="theme-toggle" onClick={toggleTheme}>
          Toggle Theme
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/userdetails" element={<UserDetails />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
