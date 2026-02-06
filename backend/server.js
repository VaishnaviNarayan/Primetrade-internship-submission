const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const connectDB = require('./config/db');
connectDB(); // Connect to the Fridge (Database)

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware (The Bouncer)
app.use(cors()); // Allow requests from other domains
app.use(express.json()); // Allow the app to understand JSON data

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/products', require('./routes/productRoutes'));

// Basic Route (The Hostess greeting)
app.get('/', (req, res) => {
    res.send('Welcome to the Backend API! The Kitchen is Open.');
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
