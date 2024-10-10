// src/components/ProfileList.js
import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import { motion } from 'framer-motion';

const ProfileList = ({ profiles }) => {
  const [activeProfileId, setActiveProfileId] = useState(null); // State to track which profile's map is visible

  const toggleMap = (id) => {
    // Toggle the map visibility for the clicked profile
    setActiveProfileId((prevId) => (prevId === id ? null : id));
  };

  return (
    <motion.div
      className="profile-list"
      style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
    >
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          name={profile.name}
          photo={profile.photo}
          description={profile.description}
          location={{ lat: profile.lat, lng: profile.lng }} // Pass location as an object
          isMapVisible={activeProfileId === profile.id} // Check if the current profile's map should be visible
          onToggleMap={() => toggleMap(profile.id)} // Function to toggle map visibility
        />
      ))}
    </motion.div>
  );
};

export default ProfileList;
