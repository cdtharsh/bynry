// server.js
import express from 'express';
import connectDb from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/routes.js'

dotenv.config();

connectDb();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/profiles', routes);

// Connect to the database


const PORT = process.env.PORT || 5000; // Use PORT from environment or default to 5000
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
