import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-zinc-900/80 backdrop-blur-md fixed w-full z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-green-500 flex items-center justify-center font-bold text-black">S</div>
          <span className="text-white font-semibold text-lg">Sai Villa</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavItem to="/" label="Home" />
          <NavItem to="/amenities-gallery" label="Gallery" />
          <NavItem to="/booking" label="Booking" />
          <NavItem to="/contact" label="Contact" />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Link 
            to="/admin/login" 
            className="hidden md:inline-block px-4 py-2 bg-green-500 text-gray-200 rounded-lg hover:bg-green-700"
          >
            Admin
          </Link>

          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

/* Desktop nav item with active styling */
function NavItem({ to, label }) {
  return (
    <NavLink 
      to={to}
      end
      className={({ isActive }) =>
        isActive ? "text-green-400" : "text-gray-300 hover:text-white"
      }
    >
      {label}
    </NavLink>
  );
}

/* Mobile Menu */
function MobileMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="md:hidden relative">
      {/* Toggle Button */}
      <button 
        onClick={() => setOpen((v) => !v)} 
        className="p-2 rounded-md bg-zinc-800 text-white"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d={
              open
                ? "M6 18L18 6M6 6l12 12" // X icon
                : "M4 6h16M4 12h16M4 18h16" // Hamburger
            }
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-zinc-900 rounded-md shadow-lg py-2">
          <MobileLink to="/" label="Home" closeMenu={() => setOpen(false)} />
          <MobileLink to="/amenities-gallery" label="Gallery" closeMenu={() => setOpen(false)} />
          <MobileLink to="/booking" label="Booking" closeMenu={() => setOpen(false)} />
          <MobileLink to="/contact" label="Contact" closeMenu={() => setOpen(false)} />
          <MobileLink to="/admin/login" label="Admin" closeMenu={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}

function MobileLink({ to, label, closeMenu }) {
  return (
    <NavLink
      to={to}
      onClick={closeMenu}
      className={({ isActive }) =>
        `block px-4 py-2 ${
          isActive ? "text-green-400" : "text-gray-200"
        } hover:bg-zinc-800`
      }
    >
      {label}
    </NavLink>
  );
}