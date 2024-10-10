// src/components/ProfileCard.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Map from './MapComponent';

const Card = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const ProfileCard = ({ name, photo, description, location, isMapVisible, onToggleMap }) => {
  return (
    <Card
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={photo}
        alt={`${name}'s profile`}
        style={{
          borderRadius: '50%',
          width: '100px',
          height: '100px',
          marginBottom: '10px',
        }}
      />
      <h2>{name}</h2>
      <p>{description}</p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '10px',
        }}
        onClick={onToggleMap}
      >
        {isMapVisible ? 'Hide Summary' : 'Show Summary'}
      </motion.button>

      {isMapVisible && <Map selectedProfile={location} />}
    </Card>
  );
};

export default ProfileCard;
