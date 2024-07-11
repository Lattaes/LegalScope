import jwt from "jsonwebtoken";
import user from "../models/user.model.js"


export const isAuthenticated = async(req, res, next) => {
    const token = req.cookies.SessionID;
    if(!token){
        return res.status(401).json({
            status: 'failed',
            message: 'unauthorized access',
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET_ACCESS_TOKEN);
        req.user = await findById(decoded.id);
        next()
    } catch (err) {
        res.status(401).json({
            status: 'failed', 
            message: 'Invalid token' 
        });
    }
}