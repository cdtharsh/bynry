import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    photo: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    coordinates: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
    },
  });

export default ('Profile', profileSchema);