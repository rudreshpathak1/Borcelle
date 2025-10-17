import React from 'react'
import { Link } from "react-router-dom"; // ✅ Use Link for SPA routing

const Footer = () => {
  return (
    <>

      {/* Section Header */}

      <div className="flex flex-col items-center my-10 px-3 sm:px-6 md:px-10 text-center space-y-2">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          Thanks For Visiting!
        </h1>
        <p className="text-gray-800 text-sm sm:text-base max-w-md sm:max-w-2xl">
          We hope you enjoyed your experience. See you again soon!
        </p>
      </div>

      <footer className="bg-primary text-white py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Brand / Logo */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">Borcelle 🍴</h2>
            <p className="text-orange-100 text-sm mt-1">
              Fresh, delicious meals delivered to your doorstep.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm md:text-base">
            <Link to="/menu" className="hover:underline">Menu</Link>
            <Link to="/offer" className="hover:underline">Offers</Link>
            <Link to="/order" className="hover:underline">Order</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-orange-100 text-center md:text-right">
            &copy; {new Date().getFullYear()} Borcelle. All rights reserved.
          </div>

        </div>
      </footer>


    </>
  )
}

export default Footer