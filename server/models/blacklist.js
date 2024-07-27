import { Timestamp } from "bson";
import mongoose from "mongoose";


const blackListScheme = new mongoose.Schema({
    token:{
        type: String,
        required: true,
        ref: "user"
    },
},
{timestamps: true}

);

export default mongoose.model("blacklist", blackListScheme);