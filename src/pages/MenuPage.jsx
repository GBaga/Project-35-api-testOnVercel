import { useEffect, useState } from "react";
import { getProducts } from "../services/product";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";

export default function MenuPage() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data.products);
      setFiltered(res.data.products);
    });
  }, []);

  useEffect(() => {
    if (category === "all") setFiltered(products);
    else setFiltered(products.filter((p) => p.category === category));
  }, [category, products]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Menu</h2>
      <CategoryFilter
        categories={["all", "burger", "pizza", "drink", "dessert", "other"]}
        selected={category}
        onSelect={setCategory}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
