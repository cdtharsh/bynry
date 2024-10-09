import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
    {
        name:{type: String, required: true},
        profileImg:{type: String},
        description: {type: String},
        address: {type: String}
    }
);

export default profileSchema;