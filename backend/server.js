// server.js
import express from 'express';
import connectDb from './config/db.js';
import dotenv from 'dotenv'

dotenv.config();

const app = express();

// Connect to the database
connectDb();

const PORT = process.env.PORT || 5000; // Use PORT from environment or default to 5000
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
