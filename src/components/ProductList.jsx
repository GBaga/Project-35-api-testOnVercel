// ProductList.jsx
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard"; // Import the ProductCard component

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  const handleAddToCart = (product, quantity) => {
    if (quantity > 0) {
      setCart((prevCart) => [...prevCart, { ...product, quantity }]);
      alert(`${product.name} added to the cart!`);
    } else {
      alert("Please select a quantity!");
    }
  };

  const handleQuantityChange = (productId, newQuantity) => {
    // Handle quantity change logic if necessary
    console.log(`Updated quantity for product ${productId} to ${newQuantity}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-black">Product List</h1>

      {products.length === 0 ? (
        <p className="text-gray-600">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product._id || product.name}
              product={product}
              handleAddToCart={handleAddToCart}
              handleQuantityChange={handleQuantityChange}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
