// src/components/Home.js
import React from 'react';
import ProfileList from './ProfileList';
import SearchBar from './SearchBar';
import { motion } from 'framer-motion';

const Home = ({ profiles, searchTerm, setSearchTerm }) => {
  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Home</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProfileList profiles={filteredProfiles} />
    </motion.div>
  );
};

export default Home;
