import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import blacklist from "../models/blacklist.js";
import jwt from "jsonwebtoken";

// Helper function to send responses
const sendResponse = (res, statusCode, status, data, message) => {
    res.status(statusCode).json({
        status,
        data,
        message
    });
};

// Register function
export async function Register(req, res) {
    const { username, email, password, role } = req.body;
    try {
        // Check if user already exists
        const userExist = await User.findOne({ email });
        if (userExist) {
            return sendResponse(res, 400, 'failed', [], "This email is already registered!");
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
        const newUser = new User({
            username,
            email,
            password: hashedPassword, // Save the hashed password
            role: role || 'user'//set role to user by default
        });

        // Save user to database
        const savedUser = await newUser.save();
        const { password: dbPassword, role: dbRole, ...user_data } = savedUser._doc; // Exclude password and role from response
        sendResponse(res, 201, "success", [user_data], "Thank you for registering with us. Your account has been successfully created.");

    } catch (err) {
        console.error(err); // Log the error for debugging
        sendResponse(res, 500, "error", [], "Internal server error!");
    }
}

export async function Login(req, res) {
    // Get variables for the login process
    const { email } = req.body;
    try {
        // Check if user exists
        const user = await User.findOne({ email }).select("+password");
        if (!user){
            return sendResponse(res, 401, 'failed', [], "Please register first!");
        }
            
        // if user exists, validate password
        const isPasswordValid = bcrypt.compare(req.body.password, user.password);
        if (!isPasswordValid){
            return sendResponse(res, 401, 'failed', [], "Invalid email or password");
        }

         // Token creation options
         const tokenOptions = {
            expiresIn: '20m'
        };
        const token = jwt.sign({ _id: user._id }, process.env.SECRET_ACCESS_TOKEN, tokenOptions);

        const cookieOptions = {
            maxAge: 20 * 60 * 1000, // 20 minutes
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
            sameSite: 'None' // Ensure SameSite=None for cross-site cookie usage
        };
        
        res.cookie("SessionID", token, cookieOptions); // Set token in cookie

        const { password: pwd, ...user_data } = user._doc;

        // Adding token to the response data
        const responseData = { ...user_data, token };

        sendResponse(res, 200, "success", [responseData], "You have successfully logged in.");

    } catch (err) {
        console.log(err);
        sendResponse(res, 500, "error", [], "Internal server error")
    }
}



export async function Logout(req, res) {
    try {
        const authHeader = req.headers['cookie']; // get the session cookie from request header
        if (!authHeader) return sendResponse(res, 204, "No Content", [], "No Content"); // No content
        const cookie = authHeader.split('=')[1]; // If there is, split the cookie string to get the actual jwt token
        const accessToken = cookie.split(';')[0];
        const checkIfBlacklisted = await blacklist.findOne({ token: accessToken }); // Check if that token is blacklisted

        // if true, send a no content response.
        if (checkIfBlacklisted) return sendResponse(res, 204, "No Content", [], "No Content");

        // otherwise blacklist token
        const newBlacklist = new blacklist({
          token: accessToken,
        });
        await newBlacklist.save();

        // Also clear request cookie on client
        res.setHeader('Clear-Site-Data', '"cookies"');
        sendResponse(res, 200, "success", [], "You are logged out!");


      } catch (err) { //catch error
        sendResponse(res, 500, "error", [], "Internal Server Error");
      }
      res.end();
    
}

