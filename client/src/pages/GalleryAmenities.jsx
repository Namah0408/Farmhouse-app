import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

import g1 from "../assets/gallery1.jpeg";
import g2 from "../assets/gallery2.jpeg";
import g3 from "../assets/gallery3.jpeg";
import g4 from "../assets/gallery4.jpeg";
import g5 from "../assets/gallery5.jpeg";
import g6 from "../assets/gallery6.jpeg";
import g7 from "../assets/gallery7.jpeg";
import g8 from "../assets/gallery8.jpeg";
import g9 from "../assets/gallery9.jpeg";
import g10 from "../assets/gallery10.jpeg";

export default function GalleryAmenities() {
  const items = [
    {
      title: "Private Swimming Pool",
      subtitle: "A clean, refreshing pool exclusively for your group.",
      image: g3,
    },
    {
      title: "Fully Air-Conditioned Rooms",
      subtitle: "Stay cool and comfortable throughout your stay.",
      image: g8,
    },
    {
      title: "Garden & Lawn Area",
      subtitle: "Perfect for relaxing, games, and evening gatherings.",
      image: g2,
    },
    {
      title: "Chilling Area",
      subtitle: "A cozy space to sit, relax, and vibe with your friends.",
      image: g10,
    },
    {
      title: "Barbeque Setup",
      subtitle: "Enjoy tasty barbeque evenings with our ready-to-use setup.",
      image: g5,
    },
    {
      title: "Private Indoor Mini-Pool with Shower",
      subtitle: "A fun indoor experience with water and comfort together.",
      image: g2,
    },
    {
      title: "In-House Food",
      subtitle: "Delicious, freshly prepared meals served at the farmhouse.",
      image: g5,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-14">
        Amenities & Gallery
      </h1>

      <div className="max-w-6xl mx-auto space-y-20">
        {items.map((item, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <motion.div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-900 p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* IMAGE */}
              <motion.div
                className={isReversed ? "md:order-2" : "md:order-1"}
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              {/* TEXT */}
              <div
                className={`flex flex-col justify-center ${
                  isReversed ? "md:order-1" : "md:order-2"
                }`}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-400 w-8 h-8" />
                  <h2 className="text-2xl md:text-3xl font-semibold">
                    {item.title}
                  </h2>
                </div>

                {/* SUBTITLE HERE */}
                <p className="mt-4 text-gray-300 text-lg leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
