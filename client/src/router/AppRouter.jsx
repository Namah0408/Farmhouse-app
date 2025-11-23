import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Amenities from "../pages/Amenities";
import Pricing from "../pages/Pricing";
import Booking from "../pages/Booking";
import Contact from "../pages/Contact";
import AdminLogin from "../pages/Admin/AdminLogin";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import { BookingProvider } from "../context/BookingContext";

/* Simple protected wrapper for admin UI (for now checks a token in localStorage) */
function AdminGuard({ children }) {
  const token = localStorage.getItem("admin_token");
  if (!token) return <Navigate to="/admin/login" replace />;
  return children;
}

export default function AppRouter() {
  return (
    <BookingProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-black text-white">
          <Navbar />
          <main className="pt-20"> {/* add offset for fixed navbar */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/amenities" element={<Amenities />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={
                <AdminGuard>
                  <AdminDashboard />
                </AdminGuard>
              } />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </BookingProvider>
  );
}