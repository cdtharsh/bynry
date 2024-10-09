import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileCard from './components/ProfileCard';
import './App.css'; // Importing CSS

function App() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/profiles')
      .then(response => {
        setProfiles(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the profiles!', error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="title">User Profiles</h1>
      <div className="profile-container">
        {profiles.map(profile => (
          <ProfileCard key={profile._id} profile={profile} />
        ))}
      </div>
    </div>
  );
}

export default App;
