import React from "react";

export default function SectionHeading({ title, subtitle, center = true }) {
  return (
    <div className={`mb-8 ${center ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      {subtitle && <p className="text-gray-300 mt-2 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}