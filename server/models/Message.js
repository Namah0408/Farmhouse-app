import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  message: { type: String, required: true }
}, { timestamps: true });

const Message = mongoose.model("Message", messageSchema);
export default Message;