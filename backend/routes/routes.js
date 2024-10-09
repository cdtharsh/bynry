import express from 'express';
import Profile from '../models/profile.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const profiles = await Profile.find({});
    res.json(profiles);
  });
  
  // Fetch a single profile by ID
  router.get('/:id', async (req, res) => {
    const profile = await Profile.findById(req.params.id);
    res.json(profile);
  });
  
  // Add a new profile
  router.post('/', async (req, res) => {
    const newProfile = new Profile(req.body);
    await newProfile.save();
    res.status(201).json(newProfile);
  });
  
  // Update a profile
  router.put('/:id', async (req, res) => {
    const updatedProfile = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProfile);
  });
  
  // Delete a profile
  router.delete('/:id', async (req, res) => {
    await Profile.findByIdAndDelete(req.params.id);
    res.status(204).send();
  });
  

export default router;
