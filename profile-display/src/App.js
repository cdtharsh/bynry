// src/App.js
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './components/GlobalStyles';
import Home from './components/Home'; // Import the Home component
import AdminDashboard from './components/AdminDashboard'; // Import the AdminDashboard component
import ThemeToggle from './components/ThemeToggle';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: 'John Doe',
      photo: 'https://via.placeholder.com/60',
      description: 'Software Developer at XYZ.',
      lat: 40.7128, // Latitude for New York
      lng: -74.0060, // Longitude for New York
    },
    {
      id: 2,
      name: 'Jane Smith',
      photo: 'https://via.placeholder.com/60',
      description: 'Product Manager at ABC.',
      lat: 34.0522, // Latitude for Los Angeles
      lng: -118.2437, // Longitude for Los Angeles
    },
    // Add more predefined profiles...
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <div className="App" style={{ padding: '20px' }}>
          <header style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1>Profile Display App</h1>
            <ThemeToggle toggleTheme={toggleTheme} />
          </header>

          <nav style={{ marginBottom: '20px' }}>
            <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
            <Link to="/admin">Admin Dashboard</Link>
          </nav>

          {/* Use <Routes> to wrap <Route> elements */}
          <Routes>
            <Route path="/" element={<Home profiles={profiles} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
            <Route path="/admin" element={<AdminDashboard profiles={profiles} setProfiles={setProfiles} />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
