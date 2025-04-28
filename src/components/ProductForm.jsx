// src/components/ProductForm.jsx
import React from "react";

export default function ProductForm({ formData, onChange, onSubmit }) {
  if (!formData) {
    return (
      <div className="p-4 text-center text-gray-600">
        Loading product data...
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 p-4 bg-white rounded shadow-md"
    >
      {/* Product Name */}
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={onChange}
        required
        className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
      />

      {/* Price */}
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={onChange}
        required
        min="0"
        step="0.01"
        className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
      />

      {/* Quantity */}
      <input
        type="number"
        name="quantity"
        placeholder="Available Quantity"
        value={formData.quantity}
        onChange={onChange}
        required
        min="0"
        className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
      />

      {/* Image URL */}
      <input
        type="text"
        name="imageUrl"
        placeholder="Image URL"
        value={formData.imageUrl}
        onChange={onChange}
        className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
      />

      {/* Category Select */}
      <select
        name="category"
        value={formData.category}
        onChange={onChange}
        className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        <option value="">Select Category</option>
        <option value="burger">Burger</option>
        <option value="pizza">Pizza</option>
        <option value="drink">Drink</option>
        <option value="dessert">Dessert</option>
        <option value="other">Other</option>
      </select>

      {/* Description */}
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={onChange}
        rows="3"
        className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
      />

      {/* Is Available */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="isAvailable"
          checked={formData.isAvailable}
          onChange={onChange}
          className="accent-red-600 w-5 h-5"
        />
        <label htmlFor="isAvailable" className="text-sm">
          Available for Sale
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
      >
        Save Product
      </button>
    </form>
  );
}
