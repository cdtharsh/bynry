// src/components/ProfileList.js
import React from 'react';
import './ProfileList.css';

const ProfileList = ({ profiles, onProfileSelect }) => {
  return (
    <div className="profile-list">
      {profiles.map((profile) => (
        <div
          key={profile.id}
          className="profile-card"
          onClick={() => onProfileSelect(profile)}
        >
          <img src={profile.photo} alt={profile.name} className="profile-photo" />
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
          <button className="summary-button">View Profile</button>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
