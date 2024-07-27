const User = require('../models/user');
const { hashPassword, comparePassword } = require('../helpers/auth');
const jwt = require('jsonwebtoken');

const test = (req, res) => {
  res.json('test is working');
};

const registerUser = async (req, res) => {
  try {
    const { name, firstName, lastName, email, password, repeatPassword } = req.body;

    // Validate inputs
    if (!name || !firstName || !lastName || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    if (password !== repeatPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }
    if (password.length < 6) {
      return res.status(400).json({ error: 'Password should be at least 6 characters long' });
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ error: 'Enter a valid email address' });
    }

    const emailExist = await User.findOne({ email });
    if (emailExist) {
      return res.status(400).json({ error: 'Email is already taken' });
    }

    const usernameExist = await User.findOne({ name });
    if (usernameExist) {
      return res.status(400).json({ error: 'Username is already taken' });
    }

    const hashedPassword = await hashPassword(password);

    // Create user
    const user = await User.create({ name, firstName, lastName, email, password: hashedPassword });
    return res.status(201).json(user);
  } catch (error) {
    console.error('Register User Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ error: 'Enter a valid email address' });
    }
    if (!password) {
      return res.status(400).json({ error: 'Password is required!' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if password matches
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign({ email: user.email, id: user._id, name: user.name }, process.env.JWT_SECRET, (err, token) => {
        if (err) {
          console.error('JWT Sign Error:', err);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.json({ token, user });
      });
    } else {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Login User Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getProfile = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      console.error('No token found in cookies');
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded || !decoded.id) {
      console.error('Failed to decode token');
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const user = await User.findById(decoded.id);
    if (!user) {
      console.error('User not found for ID:', decoded.id);
      return res.status(404).json({ error: 'User not found' });
    }

    return res.json(user);
  } catch (error) {
    console.error('Get Profile Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateProfile = async (req, res) => {
  const { profileImage, dateOfBirth, phoneNumber, province, city } = req.body;
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.profileImage = profileImage || user.profileImage;
    user.dateOfBirth = dateOfBirth || user.dateOfBirth;
    user.phoneNumber = phoneNumber || user.phoneNumber;
    user.province = province || user.province;
    user.city = city || user.city;

    await user.save();

    return res.json({ user });
  } catch (error) {
    console.error('Update Profile Error:', error); // Log detailed error
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { test, registerUser, loginUser, getProfile, updateProfile };
