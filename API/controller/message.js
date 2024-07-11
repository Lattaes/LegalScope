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

export async function getMessages(req, res) {
    const {email} = req.params;
    try{
        const messages = await Message.find({receiver: email}).or({sender: email});
        sendResponse(
            res,
            200,
            "sucess",
            messages,
            "messages retrieved"
        );
    }catch(err){
        sendResponse(res, 500, "error", [], "internal server error!");  
    }
    
}

export async function deleteMessage(req, res) {
    const {id} = req.params;
    try{
        const message = await Message.findByIdAndDelete(id);
        if (!message){
            return sendResponse(res, 404, "Failed", [], "message not found");
        }
        sendResponse(res, 200, "Sucess", [], "Message deleted successfully!");
    }catch(err){
        sendResponse(res, 500, "Error", [], "Internal Server Error!");
    }
    
}