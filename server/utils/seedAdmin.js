import Admin from "../models/Admin.js";

export const seedAdminIfNeeded = async () => {
  try {
    if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
      console.log("ADMIN_EMAIL or ADMIN_PASSWORD not set — skipping admin seed.");
      return;
    }
    const existing = await Admin.findOne({ email: process.env.ADMIN_EMAIL });
    if (existing) {
      console.log("Admin already exists.");
      return;
    }
    const admin = new Admin({
      name: "Owner",
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD
    });
    await admin.save();
    console.log("Admin user created from .env");
  } catch (err) {
    console.error("seedAdminIfNeeded error:", err);
  }
};