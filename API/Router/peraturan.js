import express from 'express';
import { createPeraturan, findPeraturan, findPeraturanById } from '../controller/peraturan.js';
import { isAuthenticated } from '../middleware/auth.js';


const router = express.Router();

router.post('/messages', isAuthenticated, createPeraturan);
router.get('/messages/:id', isAuthenticated, findPeraturan);
router.put('/messages/:id', isAuthenticated, findPeraturanById);

export default router;