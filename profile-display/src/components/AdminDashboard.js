// src/components/AdminDashboard.js
import React, { useState } from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.dashboardBackground};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProfileListContainer = styled.div`
  margin-top: 20px;
`;

const ProfileItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const AdminDashboard = ({ profiles, setProfiles }) => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [description, setDescription] = useState('');
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      // Edit profile
      setProfiles((prev) =>
        prev.map((profile) =>
          profile.id === editId
            ? { ...profile, name, photo, description }
            : profile
        )
      );
      setEditId(null);
    } else {
      // Add new profile
      const newProfile = {
        id: profiles.length + 1,
        name,
        photo,
        description,
        lat: 0, // Default values or handle separately
        lng: 0, // Default values or handle separately
      };
      setProfiles((prev) => [...prev, newProfile]);
    }
    // Reset form fields
    setName('');
    setPhoto('');
    setDescription('');
  };

  const handleEdit = (profile) => {
    setEditId(profile.id);
    setName(profile.name);
    setPhoto(profile.photo);
    setDescription(profile.description);
  };

  const handleDelete = (id) => {
    setProfiles((prev) => prev.filter((profile) => profile.id !== id));
  };

  return (
    <DashboardContainer>
      <h2>Admin Dashboard</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Photo URL"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Button type="submit">{editId ? 'Update Profile' : 'Add Profile'}</Button>
      </Form>

      <ProfileListContainer>
        <h3>Existing Profiles</h3>
        {profiles.map((profile) => (
          <ProfileItem key={profile.id}>
            <span>{profile.name}</span>
            <div>
              <Button onClick={() => handleEdit(profile)}>Edit</Button>
              <Button onClick={() => handleDelete(profile.id)}>Delete</Button>
            </div>
          </ProfileItem>
        ))}
      </ProfileListContainer>
    </DashboardContainer>
  );
};

export default AdminDashboard;
