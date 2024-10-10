// src/pages/ProfileDetails.js
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import Map from '../components/MapComponent'; // Import Map to show details

const ProfileDetails = ({ profile }) => (
  <PageWrapper>
    <div style={{ padding: '20px' }}>
      <h1>{profile.name}</h1>
      <p>{profile.description}</p>
      {/* Show map for profile details */}
      <Map selectedProfile={{ lat: profile.lat, lng: profile.lng }} />
    </div>
  </PageWrapper>
);

export default ProfileDetails;
