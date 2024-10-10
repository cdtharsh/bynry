// src/components/ProfileCard.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Map from './MapComponent';

const Card = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  width: 150px; /* Set a fixed width for consistency */
  height: 300px; /* Set a fixed height for equal sizing */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Space between elements */
  overflow: hidden; /* Prevent overflow of content */
`;

const Image = styled(motion.img)` /* Change from styled.img to styled(motion.img) */
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  align-self: center; /* Center the image horizontally */
  transition: box-shadow 0.3s ease; /* Smooth transition for shadow effect */
`;

const Description = styled.p`
  overflow: hidden; /* Hide overflow */
  white-space: nowrap; /* Prevent wrapping */
  text-overflow: ellipsis; /* Add ellipsis for overflow */
  margin: 0; /* Reset margin */
  max-height: 50px; /* Control max height for uniformity */
`;

const ProfileCard = ({ name, photo, description, location, isMapVisible, onToggleMap }) => {
  return (
    <Card
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image src={photo} alt={`${name}'s profile`} />
      <h2>{name}</h2>
      <Description>{description}</Description>
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
