import React from "react";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-6">
      <h2 className="text-center text-4xl font-bold mb-12">
        Contact <span className="text-green-400">Us</span>
      </h2>

      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-xl">
        <p className="text-lg mb-4">
          Have questions? Want to check availability? We're here to help!
        </p>

        <div className="space-y-4">
          <p>
            📞 <span className="font-semibold">Phone:</span> +91 7020692311
          </p>

          {/* Instagram */}
          <p className="flex items-center gap-2">
            <FaInstagram className="text-pink-500 text-xl" />
            <span className="font-semibold">Instagram:</span>
            <a
              href="https://www.instagram.com/saivilla2025/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              @saivillafarms
            </a>
          </p>

          <p>
            📧 <span className="font-semibold">Email:</span>{" "}
            saifinserve25@gmail.com
          </p>
          <p>
            📍 <span className="font-semibold">Location:</span> Ambika Farms,
            Nagpur, Maharashtra
          </p>
        </div>

        <iframe
          className="w-full h-64 mt-8 rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3367.887137261922!2d78.76518627525932!3d21.127056080546943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDA3JzM3LjQiTiA3OMKwNDYnMDMuOSJF!5e1!3m2!1sen!2in!4v1764099868487!5m2!1sen!2in"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
