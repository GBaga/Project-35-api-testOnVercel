// src/components/CartItem.jsx
import { useState } from "react";

export default function CartItem({ item, onUpdate, onRemove }) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      onUpdate(item.product._id, newQuantity);
    }
  };

  const handleRemove = () => {
    onRemove(item.product._id);
  };

  return (
    <div className="flex items-center space-x-4 p-4 bg-white shadow rounded">
      <div className="w-24 h-24 overflow-hidden rounded-md border">
        <img
          src={item.product.imageUrl || "/fallback-image.png"}
          alt={item.product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">
          {item.product.name}
        </h3>
        <p className="text-gray-600 text-sm">
          ${item.product.price.toFixed(2)}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
          className="w-16 text-center border rounded py-1 text-sm"
        />
        <button
          onClick={handleRemove}
          className="text-red-500 hover:text-red-700"
          aria-label="Remove item"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
