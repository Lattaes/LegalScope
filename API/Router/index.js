import express from "express";
import Auth from "./auth.js"
import Message from "./message.js"
import Profile from "./profile.js"
import Peraturan from "./peraturan.js";

const router = express.Router();

router.use("/api", Auth);
router.use("/message", Message);
router.use("/profile", Profile);
router.use("/peraturan", Peraturan);

export default router;