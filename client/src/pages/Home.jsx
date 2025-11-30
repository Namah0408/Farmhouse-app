import { motion } from "framer-motion";
import React from "react";
import heroImage from "../assets/image.png";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">

      {/* Background Image with Zoom Animation */}
      <motion.img
        src={heroImage}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.9 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Farmhouse"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-black from-black/60 via-black/40 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
        >
          Sai Villa Family Resort
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-2xl text-white mt-6 leading-relaxed drop-shadow-xl"
        >
          A Perfect Getaway for your family to Relax, Reconnect and Celebrate 
        </motion.p>

        {/* Glassmorphic Button */}
        <motion.a
          href="/booking"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 inline-block px-10 py-4 text-lg font-semibold rounded-full 
                     backdrop-blur-xl bg-green-500 border border-white/20 
                     text-white shadow-xl hover:bg-green-700 transition-all"
        >
          Book Now
        </motion.a>

      </div>
    </div>
  );
}