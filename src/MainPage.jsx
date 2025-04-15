import React from "react";
import ProductList from "./ProductList"; // Adjust the path if it's in a different folder

const MainPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-500">🍔 FastBite</h1>
          <nav className="space-x-6 text-gray-700 font-medium">
            <a href="#" className="hover:text-red-500">
              Home
            </a>
            <a href="#" className="hover:text-red-500">
              Menu
            </a>
            <a href="#" className="hover:text-red-500">
              Orders
            </a>
            <a href="#" className="hover:text-red-500">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-yellow-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-red-600">
            Your Favorite Fast Food, Delivered Fast
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Browse our delicious menu and get it delivered in minutes.
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-lg transition">
            Order Now
          </button>
        </div>
      </section>

      {/* Product List Section */}
      <main className="container mx-auto px-4 py-10">
        <ProductList />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-10">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} FastBite. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
