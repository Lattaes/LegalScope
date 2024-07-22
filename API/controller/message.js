import Chat from "../models/message.model.js";
import User from "../models/user.model.js";

const sendResponse = (res, statusCode, status, data, message) => {
    res.status(statusCode).json({
        status,
        data,
        message
    });
};

// Send message function
export async function sendMessage(req, res) {
    const { userId, sender, message } = req.body;
    try {
        const userExist = await User.findById(userId);
        if (userExist) {
            const chat = await Chat.findOne({ userId });

            const newMessage = {
                sender,
                message,
                timestamp: new Date()
            };

            if (chat) {
                chat.messages.push(newMessage);
                chat.updatedAt = new Date();
                await chat.save();
            } else {
                await Chat.create({
                    userId,
                    messages: [newMessage]
                });
            }

            sendResponse(res, 200, "success", newMessage, "Message sent successfully");
        } else {
            sendResponse(res, 400, "error", [], "User not found");
        }
    } catch (err) {
        sendResponse(res, 500, "error", [], "Internal Server Error!");
    }
}

// Get messages function
export async function getMessages(req, res) {
    const { userId } = req.params;
    try {
        const chat = await Chat.findOne({ userId });
        if (chat) {
            sendResponse(res, 200, "success", chat.messages, "Messages retrieved");
        } else {
            sendResponse(res, 404, "error", [], "Chat not found");
        }
    } catch (err) {
        sendResponse(res, 500, "error", [], "Internal Server Error!");
    }
}

// Delete message function
export async function deleteMessage(req, res) {
    const { userId, messageId } = req.params;
    try {
        const chat = await Chat.findOne({ userId });
        if (chat) {
            const messageIndex = chat.messages.findIndex(msg => msg._id.toString() === messageId);
            if (messageIndex !== -1) {
                chat.messages.splice(messageIndex, 1);
                chat.updatedAt = new Date();
                await chat.save();
                sendResponse(res, 200, "success", [], "Message deleted successfully!");
            } else {
                sendResponse(res, 404, "error", [], "Message not found");
            }
        } else {
            sendResponse(res, 404, "error", [], "Chat not found");
        }
    } catch (err) {
        sendResponse(res, 500, "error", [], "Internal Server Error!");
    }
}
