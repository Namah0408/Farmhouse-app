import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalBookings: 0,
    upcoming: 0,
    messages: 0
  });

  const [recentBookings, setRecentBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bookingRes = await axios.get(
          "http://localhost:5000/api/bookings/admin/all",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const msgRes = await axios.get(
          "http://localhost:5000/api/messages/admin/all",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const bookings = bookingRes.data.bookings || [];

        setStats({
          totalBookings: bookings.length,
          upcoming: bookings.filter((b) => new Date(b.date) > new Date()).length,
          messages: msgRes.data.messages.length,
        });

        setRecentBookings(bookings.slice(0, 5)); // latest 5 bookings
        setLoading(false);
      } catch (error) {
        console.error("Dashboard error:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white p-10">
        <h1 className="text-4xl font-bold mb-10">Admin Dashboard</h1>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-10">Admin Dashboard</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-zinc-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">Total Bookings</h2>
          <p className="text-4xl font-bold mt-3">{stats.totalBookings}</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">Upcoming</h2>
          <p className="text-4xl font-bold mt-3">{stats.upcoming}</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">Messages</h2>
          <p className="text-4xl font-bold mt-3">{stats.messages}</p>
        </div>
      </div>

      {/* Recent Requests */}
      <div className="bg-zinc-900 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Recent Booking Requests</h2>

        <div className="space-y-4">
          {recentBookings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-zinc-800 p-4 rounded-lg flex justify-between"
            >
              <span>{item.name || "Unknown User"}</span>
              <span className="text-gray-300">
                {new Date(item.date).toLocaleDateString()}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}