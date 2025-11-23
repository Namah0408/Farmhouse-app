import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { motion } from "framer-motion";
import React, { useState } from "react";

export default function Booking() {
  const [selected, setSelected] = useState();

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
              onSelect={setSelected}
              className="bg-white text-black rounded-lg p-3"
            />
          </div>

          {/* Booking Form */}
          <div className="bg-zinc-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Your Details</h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg bg-zinc-700 text-white focus:outline-none"
              />

              <input
                type="number"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg bg-zinc-700 text-white focus:outline-none"
              />

              <textarea
                placeholder="Message"
                className="w-full px-4 py-3 rounded-lg bg-zinc-700 text-white h-28 resize-none focus:outline-none"
              ></textarea>

              <button
                type="button"
                className="w-full py-3 bg-green-600 hover:bg-green-700 rounded-lg text-lg font-medium"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}