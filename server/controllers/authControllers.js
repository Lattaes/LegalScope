const User = require('../models/user');
const { hashPassword, comparePassword } = require('../helpers/auth');
const jwt = require('jsonwebtoken');

const test = (req, res) => {
  res.json('test is working');
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }
    if (!password || password.length < 6) {
      return res.status(400).json({ error: 'Password is required and should be at least 6 characters long' });
    }
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({ error: 'Email is taken already' });
    }

    const hashedPassword = await hashPassword(password);

    // create user in database
    const user = await User.create({ name, email, password: hashedPassword });
    return res.status(201).json(user);
  } catch (error) {
    console.error('Register User Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // check if password match
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
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.json(user);
  } catch (error) {
    console.error('Get Profile Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile
};
