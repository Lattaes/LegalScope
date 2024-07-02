import User from "../models/user.model";

export async function Register(req, res) {
    // Get required variables from request body
    const { username, email, password } = req.body;
    try {
        // Check if the user already exists
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({
                status: 'failed',
                data: [],
                message: "This email is already registered!"
            });
        }

        // Create a new user
        const newUser = new User({
            username,
            email,
            password
        });

        // Save the new user
        const savedUser = await newUser.save();
        const { password, role, ...user_data } = savedUser._doc; 

        // Respond with success
        res.status(200).json({
            status: "success",
            data: [user_data],
            message: "Thank you for registering with us. Your account has been successfully created."
        });

    } catch (err) {
        // Handle any errors
        res.status(500).json({
            status: "error",
            code: 500,
            data: [],
            message: "Internal server error!"
        });
    }
}

export async function Login(req, res) {
    // Get variables for the login process
    const { email } = req.body;
    try {
        // Check if user exists
        const user = await User.findOne({ email }).select("+password");
        if (!user)
            return res.status(401).json({
                status: "failed",
                data: [],
                message:
                    "Invalid email or password. Please try again with the correct credentials.",
            });
        // if user exists
        // validate password
        const isPasswordValid = bcrypt.compare(
            `${req.body.password}`,
            user.password
        );
        // if not valid, return unathorized response
        if (!isPasswordValid)
            return res.status(401).json({
                status: "failed",
                data: [],
                message:
                    "Invalid email or password. Please try again",
            });
        // return user info except password
        const { password, ...user_data } = user._doc;

        res.status(200).json({
            status: "success",
            data: [user_data],
            message: "You have successfully logged in.",
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            code: 500,
            data: [],
            message: "Internal Server Error",
        });
    }
    res.end();
}
