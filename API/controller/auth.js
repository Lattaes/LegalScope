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
    const { username, email, password } = req.body;
    try {
        const userExist = await User.findOne({ email });
        if (userExist) {
            return sendResponse(res, 400, 'failed', [], "This email is already registered!");
        }

        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
        const newUser = new User({
            username,
            email,
            password: hashedPassword // Save the hashed password
        });

        const savedUser = await newUser.save();
        const { password: dbPassword, role: dbRole, ...user_data } = savedUser._doc; // Exclude password and role from response

        sendResponse(res, 201, "success", [user_data], "Thank you for registering with us. Your account has been successfully created.");

    } catch (err) {
        console.error(err); // Log the error for debugging
        sendResponse(res, 500, "error", [], "Internal server error!");
    }
}

// Login function
export async function Login(req, res) {
    const { username, password } = req.body; 
    try {
        const user = await User.findOne({ username }).select("+password"); 
        if (!user) {
            return sendResponse(res, 401, "failed", [], "Invalid username or password. Please try again with the correct credentials.");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return sendResponse(res, 401, "failed", [], "Invalid username or password. Please try again.");
        }

        let options = {
            maxAge: 20 * 60 * 1000, // would expire in 20 minutes
            httpOnly: true, 
            secure: true,
            sameSite: "None",
        };

        const token = jwt.sign({ _id: user._id }, process.env.SECRET_ACCESS_TOKEN, { expiresIn: '20m' });
        res.cookie("SessionID", token, options); // Set token in cookie
        const { password: pwd, ...user_data } = user._doc;
        sendResponse(res, 200, "success", [user_data], "You have successfully logged in.");
    } catch (err) {
        console.error(err);
        sendResponse(res, 500, "error", [], "Internal Server Error");
    }
}


export async function Logout(req, res) {
    try {
        const authHeader = req.headers['cookie']; // get the session cookie from request header
        if (!authHeader) return res.sendStatus(204); // No content
        const cookie = authHeader.split('=')[1]; // If there is, split the cookie string to get the actual jwt token
        const accessToken = cookie.split(';')[0];
        const checkIfBlacklisted = await blacklist.findOne({ token: accessToken }); // Check if that token is blacklisted

        // if true, send a no content response.
        if (checkIfBlacklisted) return res.sendStatus(204);

        // otherwise blacklist token
        const newBlacklist = new blacklist({
          token: accessToken,
        });
        await newBlacklist.save();

        // Also clear request cookie on client
        res.setHeader('Clear-Site-Data', '"cookies"');
        res.status(200).json({ message: 'You are logged out!' });


      } catch (err) { //catch error
        res.status(500).json({
          status: 'error',
          message: 'Internal Server Error',
        });
      }
      res.end();
    
}

