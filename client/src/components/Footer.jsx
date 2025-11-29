import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-zinc-900 text-gray-300 py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-md bg-green-500 flex items-center justify-center font-bold text-black">S</div>
            <span className="text-white font-semibold">SaiVilla Farmhouse</span>
          </div>
          <p className="text-sm text-gray-400">
            Luxury farmhouse for family stays, events and weekend getaways near Nagpur.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {/*<li><a href="/pricing" className="hover:text-white">Pricing</a></li>*/}
            <li><a href="/booking" className="hover:text-white">Book Now</a></li>
            <li><a href="/amenities-gallery" className="hover:text-white">Gallery</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <p className="text-sm">Phone: +91 70206 92311</p>
          <p className="text-sm">
                      <span className="text-sm">Instagram: </span>
                      <a
                        href="https://www.instagram.com/saivilla2025/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:underline"
                      >
                        @saivillafarms
                      </a>
                    </p>
          <p className="text-sm">Email: saifinserve25@gmail.com</p>
          <p className="text-sm mt-4">© {year} Sai Villa Farmhouse</p>
        </div>
      </div>
    </footer>
  );
}