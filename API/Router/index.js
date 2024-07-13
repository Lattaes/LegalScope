import express from "express";
import Auth from "./auth.js"
import Message from "./message.js"
import Profile from "./profile.js"

const router = express.Router();

router.use("/api", Auth);
router.use("/message", Message);
router.use("/profile", Profile);

export default router;