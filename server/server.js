import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import { seedAdminIfNeeded } from "./utils/seedAdmin.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true
}));

app.use(express.json());

// Routes
app.use("/api/bookings", bookingRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/auth", authRoutes);

app.get("/api/health", (req, res) => res.json({ status: "ok" }));

// Global error handler
app.use(errorHandler);

// -----------------------------
// ✅ CONNECT DB → THEN SEED ADMIN
// -----------------------------
connectDB()
  .then(async () => {
    console.log("MongoDB Connected");

    try {
      await seedAdminIfNeeded();
      console.log("✔ Admin seeding completed");
    } catch (err) {
      console.error("❌ Admin seeding error:", err);
    }

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("❌ DB connection failed:", err);
  });
