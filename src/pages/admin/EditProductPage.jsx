import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/product";
import ProductForm from "../../components/ProductForm";

export default function EditProductPage() {
  const { id } = useParams();
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return; // ✅ Don't try to fetch if id doesn't exist
    const fetchProduct = async () => {
      try {
        const res = await getProduct(id);
        setFormData(res.data);
      } catch (err) {
        console.error(
          "Failed to fetch product:",
          err.response?.data || err.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (!id) {
    return (
      <div className="p-6 text-center text-red-600">
        No Product ID Provided.
      </div>
    );
  }

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-600">Loading product...</div>
    );
  }

  if (!formData) {
    return (
      <div className="p-6 text-center text-red-600">Product not found.</div>
    );
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // your update logic here
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
      <ProductForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
