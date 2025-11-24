import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

const generateToken = (admin) => {
  return jwt.sign({ id: admin._id, email: admin.email }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

/**
 * POST /api/auth/login
 * { email, password }
 */
export const loginAdmin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(401).json({ message: "Invalid credentials" });
    const ok = await admin.matchPassword(password);
    if (!ok) return res.status(401).json({ message: "Invalid credentials" });
    res.json({ token: generateToken(admin), admin: { email: admin.email, name: admin.name } });
  } catch (err) {
    next(err);
  }
};