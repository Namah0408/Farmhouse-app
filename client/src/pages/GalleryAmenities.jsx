import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

import g1 from "../assets/gallery1.jpeg";
import g2 from "../assets/gallery2.jpeg";
import g3 from "../assets/gallery3.jpeg";
import g4 from "../assets/gallery4.jpeg";
import g5 from "../assets/gallery5.jpeg";
import g8 from "../assets/gallery8.jpeg";
import g10 from "../assets/gallery10.jpeg";
import g11 from "../assets/gallery11.jpeg";
import g12 from "../assets/gallery12.jpeg";
import g13 from "../assets/gallery13.jpeg";
import g14 from "../assets/gallery14.jpeg";
import g15 from "../assets/gallery15.jpeg";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.jpeg";
import img3 from "../assets/image3.jpeg";
import img4 from "../assets/image4.jpeg";
import img5 from "../assets/image5.jpeg";

export default function GalleryAmenities() {
  const items = [
    {
      title: "Private Swimming Pool",
      subtitle: "Dive into a clean, refreshing pool reserved only for your group.",
      image: g3,
    },
    {
      title: "Lawn Area",
      subtitle: "A spacious green lawn perfect for picnics, games, and evening chill sessions.",
      image: g2,
    },
    {
      title: "Barbeque",
      subtitle: "Fire up your evenings with a ready-to-use BBQ setup for sizzling meals.",
      image: g1,
    },
    {
      title: "Bar Counter",
      subtitle: "Serve and enjoy your drinks in style at our cozy outdoor bar counter.",
      image: g4,
    },
    {
      title: "Gazeebo",
      subtitle: "A peaceful shaded spot to unwind, chat, and enjoy the perfect vibe.",
      image: g10,
    },
    {
      title: "Fully Air-Conditioned Rooms",
      subtitle: "Experience cool, comfortable rooms designed for complete relaxation.",
      image: g8,
    },
    {
      title: "Kitchen Area",
      subtitle: "A fully equipped kitchen space for all your cooking needs.",
      image: g13,
    },
    {
      title: "Private Indoor Shower",
      subtitle: "Refresh yourself in a comfortable, stylish indoor shower space.",
      image: g5,
    },
    {
      title: "Valley View",
      subtitle: "Wake up to serene and breathtaking valley views all around.",
      image: g14,
    },
  ];

  // images you provided for the bottom area
  const bottomImages = [g12, g11, g15, img1, img2, img3, img4, img5];

  const chunkIntoPairs = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i += 2) {
      result.push(arr.slice(i, i + 2));
    }
    return result;
  };

  const pairs = chunkIntoPairs(bottomImages);

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-14">
        Amenities & Gallery
      </h1>

      <div className="max-w-6xl mx-auto space-y-20">

        {/* NORMAL AMENITIES */}
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

                <p className="mt-4 text-gray-300 text-lg leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          );
        })}

        {/* BOTTOM: render one card per pair */}
        {pairs.map((pair, idx) => (
          <motion.div
            key={`pair-${idx}`}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-900 p-6 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 * idx }}
            viewport={{ once: true }}
          >
            {/* Left image */}
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.45 }}
              className="flex items-center justify-center"
            >
              <img
                src={pair[0]}
                alt={`bottom-${idx}-0`}
                className="w-full h-72 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Right image (if exists) otherwise show an empty placeholder to keep layout) */}
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.45 }}
              className="flex items-center justify-center"
            >
              {pair[1] ? (
                <img
                  src={pair[1]}
                  alt={`bottom-${idx}-1`}
                  className="w-full h-72 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-72 rounded-xl bg-gray-800 flex items-center justify-center">
                  {/* Optional: placeholder text or leave empty */}
                  <span className="text-gray-500">More photos coming soon</span>
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}
