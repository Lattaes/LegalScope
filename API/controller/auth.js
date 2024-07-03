import User from "../models/user.model.js";
import bcrypt from "bcrypt";

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
        const { password, role, ...user_data } = savedUser._doc; // Exclude password and role from response

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
            return sendResponse(res, 401, "failed", [], "Invalid email or password. Please try again.");
        }

        const { password: pwd, ...user_data } = user._doc;

        sendResponse(res, 200, "success", [user_data], "You have successfully logged in.");
    } catch (err) {
        console.error(err);
        sendResponse(res, 500, "error", [], "Internal Server Error");
    }
}
