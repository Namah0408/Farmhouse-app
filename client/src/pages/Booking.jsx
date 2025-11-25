import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import axios from "axios";

export default function Booking() {
  const [selected, setSelected] = useState();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [bookedDates, setBookedDates] = useState([]);

  useEffect(() => {
    // Fetch booked dates from backend
    const fetchBookedDates = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/bookings`);
        // Assuming each booking has a 'date' field stored as ISO string
        const dates = res.data.map(booking => new Date(booking.date));
        setBookedDates(dates);
      } catch (err) {
        console.error("Failed to fetch booked dates", err);
      }
    };
    fetchBookedDates();
  }, []);

  const handleSubmit = () => {
    if (!name || !phone || !selected) {
      alert("Please fill all required fields!");
      return;
    }

    const date = selected.toLocaleDateString();
    const prefilledMessage = `Hi, I want to book the farmhouse.
Name: ${name}
Phone: ${phone}
Date: ${date}
Message: ${message}`;

    const encodedMessage = encodeURIComponent(prefilledMessage);
    const adminPhoneNumber = "917020692311";

    window.open(`https://wa.me/${adminPhoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-zinc-900 p-10 rounded-2xl shadow-xl w-full max-w-4xl"
      >
        <h1 className="text-4xl font-bold text-center mb-10">Book Your Stay</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Date Picker */}
          <div className="bg-zinc-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Select a Date</h2>
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={(date) => {
                if (bookedDates.some(d => d.toDateString() === date.toDateString())) {
                  alert("This date is already booked!");
                  return;
                }
                setSelected(date);
              }}
              modifiers={{ booked: bookedDates }}
              modifiersStyles={{
                booked: {
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "8px"
                }
              }}
              className="bg-white text-black rounded-lg p-3"
            />
          </div>

          {/* Booking Form */}
          <div className="bg-zinc-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Your Details</h2>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-zinc-700 text-white"
              />

              <input
                type="number"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-zinc-700 text-white"
              />

              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-zinc-700 text-white h-28 resize-none"
              ></textarea>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full py-3 bg-green-600 hover:bg-green-700 rounded-lg text-lg font-medium flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="text-2xl" />
                Submit Request on WhatsApp
              </button>
            </form>
          </div>

        </div>
      </motion.div>
    </div>
  );
}