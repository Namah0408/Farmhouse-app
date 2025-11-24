import express from "express";
import { createMessage, getAllMessages, deleteMessage } from "../controllers/messageController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", createMessage);

// Admin
router.get("/", protect, getAllMessages);
router.delete("/:id", protect, deleteMessage);

export default router;