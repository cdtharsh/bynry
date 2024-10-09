import React, { useState, useEffect } from 'react';
import ProfileList from './components/ProfileList';
import ProfileView from './components/ProfileView';
import './style.css';

const App = () => {
  const [profiles, setProfiles] = useState([]); // State to store profiles
  const [selectedProfile, setSelectedProfile] = useState(null);

  // Dummy profiles in case the API call fails
  const dummyProfiles = [
    {
      id: 1,
      name: 'John Doe',
      description: 'Software Engineer',
      photo: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Jane Smith',
      description: 'Product Manager',
      photo: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Sara Wilson',
      description: 'UX Designer',
      photo: 'https://via.placeholder.com/150',
    },
  ];

  // Fetch profiles from backend or fallback to dummy profiles
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/profiles');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        // Format incoming profiles to match the dummy profile structure
        const formattedProfiles = data.map(profile => ({
          id: profile.id, // Ensure the backend data has an 'id'
          name: profile.name || 'Unknown Name', // Fallback to 'Unknown Name' if no name is present
          description: profile.description || 'No description provided',
          photo: profile.photo || 'https://via.placeholder.com/150', // Use a placeholder image if no photo is provided
        }));

        setProfiles(formattedProfiles);
      } catch (error) {
        console.error('Error fetching profiles, using dummy data:', error);
        setProfiles(dummyProfiles); // Use dummy profiles on error
      }
    };

    fetchProfiles();
  }, []); // Dependency array is empty, will run once after mount

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
  };

  const handleBack = () => {
    setSelectedProfile(null); // Reset profile selection
  };

  return (
    <div className="app">
      <h1 style={{ textAlign: 'center' }}>Profile Viewer Application</h1>
      {!selectedProfile ? (
        <ProfileList profiles={profiles} onProfileSelect={handleProfileSelect} />
      ) : (
        <ProfileView profile={selectedProfile} />
      )}
      {selectedProfile && (
        <button className="back-button" onClick={handleBack}>
          Back to Profile List
        </button>
      )}
    </div>
  );
};

export default App;
