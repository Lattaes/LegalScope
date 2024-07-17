const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();

const dbURI = process.env.MONGO_URL;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch(err => {
    console.error('Database connection error:', err);
    process.exit(1); // Exit the process if the database connection fails
  });

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// CORS configuration
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5175' // Update with your frontend's URL during development
  })
);

// Routes
app.use('/', require('./routes/authRoutes')); // Example route, replace with your actual routes

const port = process.env.PORT || 5000; // Use process.env.PORT for deployment flexibility
app.listen(port, () => console.log(`Server is running on port ${port}`));
