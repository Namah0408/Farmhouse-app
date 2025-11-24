import Message from "../models/Message.js";

/**
 * POST /api/messages
 */
export const createMessage = async (req, res, next) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!message || !email) return res.status(400).json({ message: "Missing fields" });
    const msg = new Message({ name, email, phone, message });
    const saved = await msg.save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
};

export const getAllMessages = async (req, res, next) => {
  try {
    const list = await Message.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    next(err);
  }
};

export const deleteMessage = async (req, res, next) => {
  try {
    const doc = await Message.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ message: "Message not found" });
    res.json({ message: "Deleted" });
  } catch (err) {
    next(err);
  }
};