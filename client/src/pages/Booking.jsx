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
Message: ${message}`;

    const encodedMessage = encodeURIComponent(prefilledMessage);
    const adminPhoneNumber = "917020692311";

    window.open(
      `https://wa.me/${adminPhoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  // BLOCK RANGE IF ANY DATE INSIDE IT IS BOOKED
  const isRangeAllowed = (range) => {
    if (!range?.from || !range?.to) return true;

    const current = new Date(range.from);
    while (current <= range.to) {
      if (bookedDates.some(d => d.toDateString() === current.toDateString())) {
        return false;
      }
      current.setDate(current.getDate() + 1);
    }
    return true;
  };

  const handleRangeSelect = (newRange) => {
    if (!isRangeAllowed(newRange)) {
      alert("Selected range includes booked dates!");
      return;
    }
    setRange(newRange);
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
            <h2 className="text-2xl font-semibold mb-4">Select Dates</h2>

            <DayPicker
              mode="range"
              selected={range}
              onSelect={handleRangeSelect}
              modifiers={{ booked: bookedDates }}
              modifiersStyles={{
                booked: {
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "6px"
                }
              }}
              className="bg-white text-black rounded-lg p-3"
            />

            {/*<p className="text-sm mt-3 text-gray-300">
              Booked dates are marked in <span className="text-red-400">red</span>.
            </p>*/}
          </div>

          {/* Form */}
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
                type="text"
                placeholder="No. of Guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
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
                placeholder="Purpose of Booking"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-zinc-700 text-white h-18 resize-none"
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