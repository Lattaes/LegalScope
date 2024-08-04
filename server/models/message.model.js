import mongoose from 'mongoose';
import { DateTime } from 'luxon';


const now = DateTime.now().setZone('Asia/Jakarta');
const formattedDate = now.toFormat('yyyy-MM-dd HH:mm:ss');

const chatSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    messages: [{
        sender: { type: String, required: true },
        message: { type: String, required: true },
        timestamp: { type: Date, formattedDate }
    }],
    createdAt: { type: Date, formattedDate },
    updatedAt: { type: Date, formattedDate }
});
const Chat = mongoose.model('Chat', chatSchema);

export default Chat;
