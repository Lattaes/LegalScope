import express from 'express';
import { sendMessage, getMessages, deleteMessage } from "../controller/message.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.post('/sendMessages', isAuthenticated, sendMessage);
router.get('/messages/:userId', isAuthenticated, getMessages);
router.delete('/messages/:userId/:messageId', isAuthenticated, deleteMessage);

export default router;
