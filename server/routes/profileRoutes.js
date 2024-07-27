const express = require('express');
const router = express.Router();
const { updateProfile } = require('../controllers/authControllers');

router.put('/profile', updateProfile);

module.exports = router;
