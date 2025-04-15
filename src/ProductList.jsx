import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setProducts(data.products || []);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setProducts([]);
      });
  }, []);

  console.log("Products state:", products);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-black">Product List</h1>

      {products.length === 0 ? (
        <p className="text-gray-600">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product._id || product.name}
              className="bg-white shadow-lg rounded-2xl p-6 border flex flex-col"
            >
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
                <p className="text-sm text-gray-600 mb-1">
                  {product.description}
                </p>
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
