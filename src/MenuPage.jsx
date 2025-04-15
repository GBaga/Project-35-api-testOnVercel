// MenuPage.jsx
import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard"; // Import the ProductCard component

const MenuPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setFilteredProducts(data.products || []);

        const uniqueCategories = [
          ...new Set(data.products.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }
  };

  const handleAddToCart = (product, quantity) => {
    if (quantity > 0) {
      setCart((prevCart) => [...prevCart, { ...product, quantity }]);
      alert(`${product.name} added to the cart!`);
    } else {
      alert("Please select a quantity!");
    }
  };

  const handleQuantityChange = (productId, newQuantity) => {
    console.log(`Updated quantity for product ${productId} to ${newQuantity}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-black">Menu</h1>

      <div className="mb-4">
        <span className="mr-2">Filter by category:</span>
        <button
          className={`cursor-pointer px-4 py-2 rounded bg-gray-200 text-sm mr-2 ${
            selectedCategory === "" ? "font-bold" : ""
          }`}
          onClick={() => handleCategoryFilter("")}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`cursor-pointer px-4 py-2 rounded bg-gray-200 text-sm mr-2 ${
              selectedCategory === category ? "font-bold" : ""
            }`}
            onClick={() => handleCategoryFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-600">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
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

export default MenuPage;
