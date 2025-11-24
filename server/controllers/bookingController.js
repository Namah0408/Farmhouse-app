import Booking from "../models/Booking.js";

/**
 * Create a new booking
 * POST /api/bookings
 */
export const createBooking = async (req, res, next) => {
  try {
    const { name, email, phone, dateFrom, dateTo, guests, message, totalAmount } = req.body;
    if (!name || !email || !dateFrom || !dateTo) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // optional: check overlap (simple)
    const overlapping = await Booking.findOne({
      $or: [
        {
          dateFrom: { $lte: new Date(dateTo) },
          dateTo: { $gte: new Date(dateFrom) }
        }
      ],
      status: { $in: ["pending", "confirmed"] }
    });

    if (overlapping) {
      return res.status(409).json({ message: "Selected dates are not available" });
    }

    const booking = new Booking({
      name, email, phone, dateFrom, dateTo, guests, message, totalAmount
    });
    const saved = await booking.save();
    return res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
};

/**
 * Get all bookings (admin)
 * GET /api/bookings
 */
export const getAllBookings = async (req, res, next) => {
  try {
    const list = await Booking.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    next(err);
  }
};

/**
 * Get booking by id
 * GET /api/bookings/:id
 */
export const getBookingById = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.json(booking);
  } catch (err) {
    next(err);
  }
};

/**
 * Update booking status (admin)
 * PATCH /api/bookings/:id/status
 */
export const updateBookingStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    booking.status = status;
    await booking.save();
    res.json(booking);
  } catch (err) {
    next(err);
  }
};

/**
 * Delete booking (admin)
 * DELETE /api/bookings/:id
 */
export const deleteBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.json({ message: "Deleted" });
  } catch (err) {
    next(err);
  }
};

/**
 * Get booked date ranges (for calendar)
 * GET /api/bookings/dates
 */
export const getBookedDates = async (req, res, next) => {
  try {
    const bookings = await Booking.find({ status: { $in: ["pending", "confirmed"] } }).select("dateFrom dateTo -_id");
    res.json(bookings);
  } catch (err) {
    next(err);
  }
};