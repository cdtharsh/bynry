import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const res = await axios.get('http://localhost:5000/api/profiles');
      setProfiles(res.data);
    };

    fetchProfiles();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/profiles/${id}`);
    setProfiles(profiles.filter((profile) => profile._id !== id));
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <h3>Manage Profiles</h3>
      <ul>
        {profiles.map((profile) => (
          <li key={profile._id}>
            {profile.name}
            <button onClick={() => handleDelete(profile._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
