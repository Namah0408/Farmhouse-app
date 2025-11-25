import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-zinc-900/80 backdrop-blur-md fixed w-full z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-green-500 flex items-center justify-center font-bold text-black">S</div>
          <span className="text-white font-semibold text-lg">SaiVilla</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" end className={({isActive}) => isActive ? "text-green-400" : "text-gray-300 hover:text-white"}>
            Home
          </NavLink>
          <NavLink to="/gallery" className={({isActive}) => isActive ? "text-green-400" : "text-gray-300 hover:text-white"}>
            Gallery
          </NavLink>
          <NavLink to="/amenities" className={({isActive}) => isActive ? "text-green-400" : "text-gray-300 hover:text-white"}>
            Amenities
          </NavLink>
          <NavLink to="/pricing" className={({isActive}) => isActive ? "text-green-400" : "text-gray-300 hover:text-white"}>
            Pricing
          </NavLink>
          <NavLink to="/booking" className={({isActive}) => isActive ? "text-green-400" : "text-gray-300 hover:text-white"}>
            Booking
          </NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "text-green-400" : "text-gray-300 hover:text-white"}>
            Contact
          </NavLink>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/admin/login" className="hidden md:inline-block px-4 py-2 bg-green-500 text-gray-200 rounded-lg hover:bg-green-700">
            Admin
          </Link>

          {/* Mobile menu toggle (simple) */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

function MobileMenu() {
  // simple mobile dropdown without heavy state — uses CSS checkbox trick or small local state
  const [open, setOpen] = React.useState(false);
  return (
    <div className="md:hidden relative">
      <button onClick={() => setOpen(v => !v)} className="p-2 rounded-md bg-zinc-800 text-white">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-zinc-900 rounded-md shadow-lg py-2">
          <MobileLink to="/" label="Home" onClick={() => setOpen(false)} />
          <MobileLink to="/gallery" label="Gallery" onClick={() => setOpen(false)} />
          <MobileLink to="/amenities" label="Amenities" onClick={() => setOpen(false)} />
          <MobileLink to="/pricing" label="Pricing" onClick={() => setOpen(false)} />
          <MobileLink to="/booking" label="Booking" onClick={() => setOpen(false)} />
          <MobileLink to="/contact" label="Contact" onClick={() => setOpen(false)} />
          <MobileLink to="/admin/login" label="Admin" onClick={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}

function MobileLink({ to, label, onClick }) {
  return (
    <NavLink to={to} onClick={onClick} className="block px-4 py-2 text-gray-200 hover:bg-zinc-800">
      {label}
    </NavLink>
  );
}

import React from "react";