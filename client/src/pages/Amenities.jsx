import { CheckCircle } from "lucide-react";
import React from "react";

export default function Amenities() {
  const amenities = [
    "Private Swimming Pool",
    "Fully Air-Conditioned Rooms",
    "Garden & Lawn Area",
    "Indoor & Outdoor Games",
    "Barbeque Setup",
    "Bonfire Zone",
    "24/7 Power Backup",
    "High-Speed WiFi",
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-6">
      <h2 className="text-center text-4xl font-bold mb-12">
        Our <span className="text-green-400">Amenities</span>
      </h2>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {amenities.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-gray-800 p-5 rounded-xl shadow-md"
          >
            <CheckCircle className="text-green-400" />
            <span className="text-lg">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}