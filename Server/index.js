const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const bcrypt = require('bcrypt');
const LegalscopeModel = require('./models/Legalscope');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection string should be stored in .env file
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        // Check if the user already exists
        const userExists = await LegalscopeModel.findOne({ email });
        if (userExists) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the new user
        const newUser = new LegalscopeModel({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.json(newUser);
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err });
    }
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
