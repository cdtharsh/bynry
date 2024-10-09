import React from 'react';

const ProfileCard = ({profile}) => {
    return(
        <div className='profile-card'>
            <img src = {profile.photo} alt={profile.name} width="100" />
            <h3>{profile.name}</h3>
            <p>{profile.description}</p>
            <p>{profile.address}</p>
        </div>
    );
};

export default ProfileCard;