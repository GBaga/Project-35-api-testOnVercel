import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-500">🍔 FastBite</h1>
        <nav className="space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-red-500 cursor-pointer">
            Home
          </Link>
          <Link to="/menu" className="hover:text-red-500 cursor-pointer">
            Menu
          </Link>
          <Link to="#" className="hover:text-red-500 cursor-pointer">
            Orders
          </Link>
          <Link to="#" className="hover:text-red-500 cursor-pointer">
            Contact
          </Link>
          <Link to="/dashboard" className="hover:text-red-500 cursor-pointer">
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
