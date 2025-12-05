import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import img1 from "../assets/image1.png";
import img2 from "../assets/image2.jpeg";
import img3 from "../assets/image3.jpeg";
import img4 from "../assets/image4.jpeg";
import img5 from "../assets/image5.jpeg";

export default function Home() {
  const images = [img1, img2, img3, img4, img5]; // ADD multiple images here

  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Swipe left/right
  const handleSwipe = (direction) => {
    if (direction === "left") {
      setIndex((prev) => (prev + 1) % images.length);
    } else {
      setIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">

      {/* Background Slideshow */}
      <motion.img
        key={index}
        src={images[index]}
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(e, { offset }) => {
          if (offset.x < -80) handleSwipe("left");
          if (offset.x > 80) handleSwipe("right");
        }}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Farmhouse"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-black from-black/60 via-black/40 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
        >
          Sai Villa Family Resort
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-2xl text-white mt-6 leading-relaxed drop-shadow-xl"
        >
          A Perfect Getaway for your family to Relax, Reconnect and Celebrate 
        </motion.p>

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

      {/* Slide Indicators (Dots) */}
      <div className="absolute bottom-6 flex gap-3 z-20">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-green-500 scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
