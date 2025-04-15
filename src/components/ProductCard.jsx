// components/ProductCard.jsx
import React, { useState } from "react";

const ProductCard = ({ product, handleAddToCart, handleQuantityChange }) => {
  const [quantity, setQuantity] = useState(product.quantityInCart || 0);

  const onQuantityChange = (change) => {
    const newQuantity = Math.max(0, quantity + change);
    setQuantity(newQuantity);
    handleQuantityChange(product._id, newQuantity);
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 border flex flex-col">
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="rounded-xl mb-4 h-48 w-full object-cover"
        />
      )}
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-700 mb-1">Price: {product.price}₾</p>
      <p className="text-gray-700 mb-1">Quantity: {product.quantity}</p>
      {product.description && (
        <p className="text-sm text-gray-600 mb-1">{product.description}</p>
      )}
      {product.category && (
        <p className="text-sm text-gray-500 mb-1">
          Category: {product.category}
        </p>
      )}
      <p
        className={`text-sm font-medium ${
          product.isAvailable ? "text-green-600" : "text-red-600"
        }`}
      >
        {product.isAvailable ? "Available" : "Out of stock"}
      </p>

      {/* Quantity Controls */}
      <div className="flex items-center mt-4">
        <button
          className="cursor-pointer px-4 py-2 text-white bg-blue-500 rounded"
          onClick={() => onQuantityChange(-1)}
        >
          -
        </button>
        <span className="mx-4 text-lg">{quantity}</span>
        <button
          className="cursor-pointer px-4 py-2 text-white bg-blue-500 rounded"
          onClick={() => onQuantityChange(1)}
        >
          +
        </button>
      </div>

      {/* Add to Cart button */}
      <button
        className="mt-4 py-2 px-4 bg-green-500 text-white rounded"
        onClick={() => handleAddToCart(product, quantity)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
