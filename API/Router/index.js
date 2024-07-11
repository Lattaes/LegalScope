import express from "express";
import Auth from "./auth.js"
import Message from "./message.js"

const router = express.Router();

router.use("/api", Auth);
router.use("/message", Message);

export default router;