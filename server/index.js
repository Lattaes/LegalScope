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

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5175' // Match the client port here
  })
);

app.use('/', require('./routes/authRoutes')); // Ensure this line is present

const port = 5000;  // Change to the correct port
app.listen(port, () => console.log(`Server is running on port ${port}`));
