import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  dateFrom: { type: Date, required: true },
  dateTo: { type: Date, required: true },
  guests: { type: Number, default: 2 },
  message: { type: String, default: "" },
  status: { type: String, enum: ["pending", "confirmed", "rejected", "cancelled"], default: "pending" },
  totalAmount: { type: Number, default: 0 },
  paymentStatus: { type: String, enum: ["pending", "paid", "failed"], default: "pending" }
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;