import { motion } from "framer-motion";
import React from "react";

export default function Pricing() {
  const plans = [
    {
      title: "Weekday Package",
      price: "₹6,999",
      features: [
        "Up to 10 Guests",
        "Swimming Pool Access",
        "Indoor + Outdoor Seating",
        "Full Property Access",
        "Free Parking",
      ],
      highlight: false,
    },
    {
      title: "Weekend Package",
      price: "₹9,999",
      features: [
        "Up to 12 Guests",
        "Swimming Pool Access",
        "Private Lawn",
        "Sound System Allowed",
        "Full Property Access",
      ],
      highlight: true,
    },
    {
      title: "Night Stay",
      price: "₹12,499",
      features: [
        "Up to 8 Guests",
        "3 Bedrooms + Living Room",
        "Kitchen Access",
        "Private BBQ Space",
        "Full Property Access",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-10">
        Pricing
      </h1>

      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
        Choose from our flexible farmhouse booking packages. Designed to give
        you the perfect day-out or stay experience.
      </p>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 + index * 0.2 }}
            viewport={{ once: true }}
            className={`p-8 rounded-xl shadow-xl border ${
              plan.highlight
                ? "bg-green-700 border-green-500 scale-105"
                : "bg-zinc-900 border-zinc-700"
            }`}
          >
            <h2 className="text-3xl font-bold mb-4">{plan.title}</h2>
            <p className="text-5xl font-extrabold mb-6">{plan.price}</p>

            <ul className="space-y-3 mb-6">
              {plan.features.map((f, i) => (
                <li key={i} className="text-gray-200 flex items-center gap-2">
                  <span className="text-green-400">✔</span> {f}
                </li>
              ))}
            </ul>

            <a
              href="/booking"
              className="block text-center py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-300 transition"
            >
              Book Now
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}