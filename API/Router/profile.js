import express from 'express';
import multer from 'multer';
import { updateProfile, getProfile } from '../controller/profile.controller.js';
import isAuthenticated from '../middleware/auth.js';

const router = express.Router();

//configure this as needed
const upload = multer({ dest: 'uploads/' }); 

router.put('/profile', isAuthenticated, upload.single('profilePicture'), updateProfile);
router.get('/profile', isAuthenticated, getProfile);

export default router;
