// src/App.js
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './components/GlobalStyles';
import ProfileList from './components/ProfileList';
import ThemeToggle from './components/ThemeToggle';
import LoadingSpinner from './components/LoadingSpinner';
import SearchBar from './components/SearchBar';
import PageWrapper from './components/PageWrapper';
import { motion } from 'framer-motion';
import { MapProvider } from './context/MapContext'; // Import the MapProvider

const App = () => {
  const [theme, setTheme] = useState('light');
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchProfiles = async () => {
    setLoading(true);
    setTimeout(() => {
      setProfiles([
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
        {
          id: 3,
          name: 'Alice Johnson',
          photo: 'https://via.placeholder.com/60',
          description: 'Graphic Designer at DEF.',
          lat: 51.5074, // Latitude for London
          lng: -0.1278, // Longitude for London
        },
        {
          id: 4,
          name: 'Michael Brown',
          photo: 'https://via.placeholder.com/60',
          description: 'Data Scientist at GHI.',
          lat: 48.8566, // Latitude for Paris
          lng: 2.3522, // Longitude for Paris
        },
        {
          id: 5,
          name: 'Emily Davis',
          photo: 'https://via.placeholder.com/60',
          description: 'Web Developer at JKL.',
          lat: -33.8688, // Latitude for Sydney
          lng: 151.2093, // Longitude for Sydney
        },
        {
          id: 6,
          name: 'Chris Lee',
          photo: 'https://via.placeholder.com/60',
          description: 'Marketing Specialist at MNO.',
          lat: 35.6762, // Latitude for Tokyo
          lng: 139.6503, // Longitude for Tokyo
        },
        // Add more profiles as needed
      ]);
      setLoading(false);
    }, 2000);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <MapProvider> {/* Wrap with MapProvider */}
        <motion.div
          className="App"
          style={{ padding: '20px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <header style={{ display: 'flex', justifyContent: 'space-between' }}>
            <motion.h1
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              Profile Display App
            </motion.h1>
            <ThemeToggle toggleTheme={toggleTheme} />
          </header>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </motion.div>

          <motion.button
            onClick={fetchProfiles}
            whileHover={{ scale: 1.05 }}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '20px',
            }}
          >
            Fetch Profiles
          </motion.button>

          {loading ? (
            <LoadingSpinner />
          ) : (
            <ProfileList profiles={filteredProfiles} />
          )}
        </motion.div>
      </MapProvider>
    </ThemeProvider>
  );
};

export default App;
