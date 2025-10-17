import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Use Link for SPA routing
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="shadow-md bg-white text-white">
      {/* 🔹 Upper Section */}
      <div className="bg-primary py-2">
        <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
          {/* Left: Brand */}
          <Link
            className="font-bold text-xl sm:text-2xl flex items-center gap-2"
            to="/"
          >
            <h1 className="w-9 h-9 sm:w-10 sm:h-10">Borcelle</h1>
          </Link>

          {/* Right: Search + Buttons (Hidden on mobile) */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Search */}
            <div className="relative transition-all duration-300 group">
              <MagnifyingGlassIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white" />
              <input
                type="text"
                placeholder="Search"
                className="w-[160px] sm:w-[200px] group-hover:w-[230px] placeholder:text-gray-100 transition-all duration-500 ease-in-out rounded-full border border-white px-3 pr-10 py-1 focus:outline-none text-sm"
              />
            </div>

            {/* Cart Icon */}
            <Link to="/cart">
              <button className="bg-white hover:bg-orange-500 p-2 rounded-full text-primary hover:text-white flex items-center justify-center transition-all duration-300">
                <ShoppingCartIcon className="w-5 h-5" />
              </button>
            </Link>

            {/* Order Button */}
            <Link to="/order">
              <button className="bg-white hover:bg-orange-500 px-4 py-2 rounded-full text-sm text-primary hover:text-white font-medium transition-all duration-300">
                Order
              </button>
            </Link>

          </div>

          {/* Hamburger Icon (Mobile) */}
          <button
            className="sm:hidden p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* 🔹 Lower Section: Nav Links */}
      <div className="bg-white overflow-hidden transition-all duration-500 ease-in-out">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Desktop Links */}
          <ul className="hidden sm:flex justify-center gap-6 md:gap-10 lg:gap-14 text-gray-700 font-medium py-2">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="hover:text-primary transition-colors"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/special" className="hover:text-primary transition-colors">
                Special
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/order" className="hover:text-primary transition-colors">
                Order Now
              </Link>
            </li>
          </ul>

          {/* Mobile Dropdown with Smooth Animation */}


          <div
            className={`sm:hidden relative overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
              }`}
          >
            <ul className="flex flex-col items-center gap-4 text-gray-700 font-medium border-t border-gray-300 bg-white pt-2 pb-4">
              <li>
                <Link
                  to="/"
                  className="hover:text-primary transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="hover:text-primary transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/special"
                  className="hover:text-primary transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Specials
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/order"
                  className="hover:text-primary transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Order Now
                </Link>
              </li>

              {/* 🔍 Mobile Search */}
              <li className="w-11/12 flex items-center gap-2 mt-2">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full border border-gray-300 rounded-full px-3 py-1 text-sm focus:outline-none focus:border-primary transition-all duration-300"
                />
              </li>
            </ul>
          </div>



        </div>
      </div>
    </nav>
  );
};

export default Navbar;
