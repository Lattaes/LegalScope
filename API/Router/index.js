import express from "express";
import Auth from "./auth.js"

const router = express.Router();

router.use("/api", Auth);

export default router;