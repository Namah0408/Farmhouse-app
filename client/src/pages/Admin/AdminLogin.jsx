import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        setLoading(false);
        return;
      }

      localStorage.setItem("admin_token", data.token);

      navigate("/admin/dashboard");
    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

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

        {error && <p className="text-red-400 text-center mb-3">{error}</p>}

        <form
          className="space-y-5"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <input
            type="email"
            placeholder="Admin Email"
            name="admin-email"              // Prevents autofill
            autoComplete="off"              // Prevents autofill
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            name="admin-pass"               // Prevents autofill
            autoComplete="new-password"     // Prevents autofill
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white focus:outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-lg font-medium ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}