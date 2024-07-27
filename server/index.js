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
app.use(express.json({ limit: '10mb' }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: '10mb' })); 

// CORS configuration
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5175'
  })
);

// Routes should come after CORS middleware
app.use('/', require('./routes/authRoutes'));
app.use('/profile', require('./routes/profileRoutes'));

const port = process.env.PORT || 5000; // Use process.env.PORT for deployment flexibility
app.listen(port, () => console.log(`Server is running on port ${port}`));
