import Admin from "../models/Admin.js";

export const seedAdminIfNeeded = async () => {
  try {
    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;

    // Check if .env values exist
    if (!email || !password) {
      console.log("⚠️ ADMIN_EMAIL or ADMIN_PASSWORD missing — skipping admin seed.");
      return;
    }

    // Check if admin already exists
    const existing = await Admin.findOne({ email });
    if (existing) {
      console.log("✔ Admin already exists. Skipping seed.");
      return;
    }

    // Create new admin
    const admin = new Admin({
      name: "Owner",
      email,
      password   // Auto-hashed by Admin model pre-save hook
    });

    await admin.save();
    console.log("🎉 Admin created successfully from .env");
  } catch (err) {
    console.error("❌ seedAdminIfNeeded error:", err.message);
  }
};