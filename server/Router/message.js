import express from 'express';
import { sendMessage, getMessages, deleteMessage } from "../controller/message.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.post('/messages', isAuthenticated, sendMessage);
router.get('/messages/:email', isAuthenticated, getMessages);
router.delete('/messages/:id', isAuthenticated, deleteMessage);

export default router;