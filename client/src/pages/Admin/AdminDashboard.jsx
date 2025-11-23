import { motion } from "framer-motion";
import React from "react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-10">Admin Dashboard</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-zinc-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">Total Bookings</h2>
          <p className="text-4xl font-bold mt-3">23</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">Upcoming</h2>
          <p className="text-4xl font-bold mt-3">5</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">Messages</h2>
          <p className="text-4xl font-bold mt-3">12</p>
        </div>
      </div>

      {/* Recent Requests */}
      <div className="bg-zinc-900 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Recent Booking Requests</h2>

        <div className="space-y-4">
          {[
            { name: "Ritesh", date: "12 Feb 2025" },
            { name: "Aarav", date: "14 Feb 2025" },
            { name: "Simran", date: "17 Feb 2025" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-zinc-800 p-4 rounded-lg flex justify-between"
            >
              <span>{item.name}</span>
              <span className="text-gray-300">{item.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}