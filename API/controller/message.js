import Message from "../models/message.model.js";
import User from "../models/user.model.js";

const sendResponse = (res, statusCode, status, data, message) => {
    res.status(statusCode).json({
        status,
        data,
        message
    });
};

//send message function
export async function sendMessage(req, res) {
    const {sender, receiver, content, timestamp} = req.body;
    try{
        const userExist = await User.findOne({email});
        if(userExist){
            const newMessage = await Message.create({
                sender,
                receiver,
                content,
                timestamp,
            })

            const savedMessage = await newMessage.save();
            sendResponse(res, 200, "success", savedMessage, "message sent successfully");
        }
        }catch(err){
            sendResponse(res, 500, "error", [], "internal Server error!");
        }
}