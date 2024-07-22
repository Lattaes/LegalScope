import User from '../models/user.model.js';

export async function updateProfile(req, res){
    const {firstName, lastName} = req.body;
    const profilePicture = req.file ? req.file.path : null;    

    try {
        const updatedData = {firstName, lastName};
        if(profilePicture) updatedData.profilePicture = profilePicture;

        const updatedUser = await User.findByIdAndUpdate(req.user._id, updatedData, {new : true});
        const {password, email, ...user_data} = updatedUser._doc;

        sendResponse(res, 200, "success", user_data, "Profile updated sucessfully" )
    } catch (err) {
        console.error(err);
        sendResponse(res, 500, "error occurred", [], "internal server error")
    }
}

export async function readProfile(req, res) {
    try {
        const user = await user.findById(req.user._id,).select("-pass");
        if (!user){
            return sendResponse(res, 404, "failed", [], "user not found");
        }
        sendResponse(res, 200, "success", user_data, "Profile fetched" );
    } catch (err) {
        console.error(err);
        sendResponse(res, 500, "failed", [], "internal server error")
    }
}


