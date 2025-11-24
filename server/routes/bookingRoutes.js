import express from "express";
import {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBookingStatus,
  deleteBooking,
  getBookedDates
} from "../controllers/bookingController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public
router.post("/", createBooking);
router.get("/dates", getBookedDates);

// Admin-protected (requires token)
router.get("/", protect, getAllBookings);
router.get("/:id", protect, getBookingById);
router.patch("/:id/status", protect, updateBookingStatus);
router.delete("/:id", protect, deleteBooking);

export default router;