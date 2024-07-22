import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    firstName: {type: String},
    lastName: {type: String},
    profilePicture: {type: String},
    messages: {type: mongoose.Schema.Types.ObjectId, ref: 'Messages'}
});

// hash user's password
userSchema.pre("save", function (next) {
    const user = this;

    if (!user.isModified("password")) return next();
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.generateAccessJWT = function () {
    let payload = {
      id: this._id,
    };
    return jwt.sign(payload, process.env.SECRET_ACCESS_TOKEN, {
      expiresIn: '20m',
    });
  };

const User = mongoose.model('User', userSchema);

export default User;
