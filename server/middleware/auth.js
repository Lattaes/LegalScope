const jwt = require('jsonwebtoken');
const User = require('../models/user');

const requireAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    if (!req.user) {
      return res.status(404).json({ error: 'User not found' });
    }

    next();
  } catch (error) {
    console.error('Authentication Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = requireAuth;
