import { motion } from "framer-motion";
import React from "react";

export default function AdminLogin() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-zinc-900 p-10 rounded-2xl w-full max-w-md shadow-xl"
      >
        <h1 className="text-3xl font-bold text-center text-white mb-8">
          Admin Login
        </h1>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Admin Username"
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white focus:outline-none"
          />

          <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg">
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
}