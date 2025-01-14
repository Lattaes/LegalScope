import express from 'express';
import multer from 'multer';
import { updateProfile, readProfile } from '../controller/profile.js'
import { isAuthenticated } from '../middleware/auth.js';

const router = express.Router();

//configure this as needed
const upload = multer({ dest: 'uploads/' }); 

router.put('/updateProfile', isAuthenticated, upload.single('profilePicture'), updateProfile);
router.get('/getProfile', isAuthenticated, readProfile);

export default router;
