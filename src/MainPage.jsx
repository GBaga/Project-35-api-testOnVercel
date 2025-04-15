import React from "react";
import ProductList from "./components/ProductList"; // Adjust the path if it's in a different folder
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
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
    </div>
  );
};

export default MainPage;
