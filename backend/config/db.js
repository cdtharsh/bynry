// config/db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

// Specify the path to the .env file outside the backend folder
dotenv.config({ path: path.resolve(process.cwd(), '../.env') });

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error:', error.message); // Log just the error message
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
