import React from "react";

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
            📞 <span className="font-semibold">Phone:</span> +91 9876543210
          </p>
          <p>
            📧 <span className="font-semibold">Email:</span> greennestfarmhouse@gmail.com
          </p>
          <p>
            📍 <span className="font-semibold">Location:</span> Near Nagpur, Maharashtra
          </p>
        </div>

        <iframe
          className="w-full h-64 mt-8 rounded-xl"
          src="https://maps.google.com/maps?q=nagpur&t=&z=13&ie=UTF8&iwloc=&output=embed"
        />
      </div>
    </div>
  );
}