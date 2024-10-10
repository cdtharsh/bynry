import React from 'react';
import '../styles/ProfileCard.css';

const ProfileCard = ({ name, description, imageUrl }) => {
  return (
    <div className="profile-card">
      <img className="profile-image" src={imageUrl} alt={name} />
      <div className="profile-info">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
