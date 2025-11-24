import { motion } from "framer-motion";
import React from "react";
import g1 from "../assets/gallery1.jpeg";
import g2 from "../assets/gallery2.jpeg";
import g3 from "../assets/gallery3.jpeg";
import g4 from "../assets/gallery4.jpeg";
import g5 from "../assets/gallery5.jpeg";

export default function Gallery() {
  const images = [g1, g2, g3, g4, g5];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
        Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src={img}
              alt="Farmhouse"
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}