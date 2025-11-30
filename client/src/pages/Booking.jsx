import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import axios from "axios";

export default function Booking() {
  const [range, setRange] = useState({ from: undefined, to: undefined });
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [bookedDates, setBookedDates] = useState([]);
  const [nights, setNights] = useState(0);
  const [days, setDays] = useState(0);

  const today = new Date();

  useEffect(() => {
    const fetchBookedDates = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/bookings`);
        const dates = res.data.map(b => new Date(b.date));
        setBookedDates(dates);
      } catch (err) {
        console.error("Failed to fetch booked dates", err);
      }
    };
    fetchBookedDates();
  }, []);

  const calculateNights = (from, to) => {
    if (!from || !to) return 0;
    const diff = (to - from) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  };

  const calculateDays = (nights) => {
    if (nights <= 0) return 0;
    return nights + 1;
  };

  const handleRangeSelect = (newRange) => {
    if (!newRange) return;

    if (newRange.from && newRange.from < today) {
      alert("Past dates cannot be selected.");
      return;
    }

    if (!isRangeAllowed(newRange)) {
      alert("Selected range contains booked dates!");
      return;
    }

    setRange(newRange);

    const n = calculateNights(newRange.from, newRange.to);
    setNights(n);
    setDays(calculateDays(n));
  };

  const isRangeAllowed = (range) => {
    if (!range?.from || !range?.to) return true;

    const curr = new Date(range.from);
    while (curr <= range.to) {
      if (bookedDates.some(d => d.toDateString() === curr.toDateString())) {
        return false;
      }
      curr.setDate(curr.getDate() + 1);
    }
    return true;
  };

  const handleSubmit = () => {
    if (!name || !guests || !phone || !range.from || !range.to) {
      alert("Please fill all required fields and select a date range!");
      return;
    }

    const startDate = range.from.toLocaleDateString();
    const endDate = range.to.toLocaleDateString();

    const prefilledMessage = `Hello! I am interested in booking your Farmhouse
Name: ${name}
Guests: ${guests}
Phone: ${phone}
Start Date: ${startDate}
End Date: ${endDate}
Total Nights: ${nights}
Total Days: ${days}
Message: ${message}`;

    const encodedMessage = encodeURIComponent(prefilledMessage);
    const adminPhoneNumber = "917020692311";

    window.open(
      `https://wa.me/${adminPhoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center pt-24 pb-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-zinc-900 p-6 md:p-10 rounded-2xl shadow-xl w-full max-w-4xl"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Book Your Stay</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-6">
          
          {/* Calendar */}
          <div className="bg-zinc-800 p-4 md:p-6 rounded-xl shadow-lg w-full">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">Select Dates</h2>

            <div className="overflow-x-auto">
              <DayPicker
                mode="range"
                selected={range}
                onSelect={handleRangeSelect}
                disabled={{ before: today }}
                modifiers={{ booked: bookedDates }}
                modifiersStyles={{
                  booked: {
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "6px"
                  }
                }}
                className="bg-white text-black rounded-lg p-2 md:p-3"
              />
            </div>

            {/* Nights & Days Count */}
            {(nights > 0 || days > 0) && (
              <div className="mt-4 space-y-1">
                {days > 0 && (
                  <p className="text-blue-400 font-medium text-lg">
                    📅 {days} day{days > 1 ? "s" : ""} selected
                  </p>
                )}
                {nights > 0 && (
                  <p className="text-green-400 font-medium text-lg">
                    🌙 {nights} night{nights > 1 ? "s" : ""} selected
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Form */}
          <div className="bg-zinc-800 p-4 md:p-6 rounded-xl shadow-lg">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">Your Details</h2>

            <form className="space-y-4 md:space-y-5" onSubmit={(e) => e.preventDefault()}>

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-zinc-700 text-white text-base"
              />

              <input
                type="text"
                placeholder="No. of Guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-zinc-700 text-white text-base"
              />

              <input
                type="number"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-zinc-700 text-white text-base"
              />

              <textarea
                placeholder="Purpose of Booking"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-zinc-700 text-white text-base resize-none h-24"
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