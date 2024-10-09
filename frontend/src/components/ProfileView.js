// src/components/ProfileView.js
import React from 'react';
import './ProfileView.css';

const ProfileView = ({ profile }) => {
  return (
    <div className="profile-view">
      <h2>{profile.name}</h2>
      <img src={profile.photo} alt={profile.name} className="profile-photo-large" />
      <p>{profile.description}</p>
      {/* You can add more profile details here */}
    </div>
  );
};

export default ProfileView;
