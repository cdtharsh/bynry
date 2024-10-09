import express from 'express';
import Profile from '../models/profile.js';
import router from 'express.r'

// GET all profiles
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new profile
router.post('/', async (req, res) => {
  const profile = new Profile({
    name: req.body.name,
    profileImg: req.body.profileImg,
    description: req.body.description,
    address: req.body.address
  });

  try {
    const newProfile = await profile.save();
    res.status(201).json(newProfile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
