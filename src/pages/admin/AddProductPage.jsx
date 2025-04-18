// AddProductPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../services/product";
import useAuth from "../../hooks/useAuth";
import ProductForm from "../../components/ProductForm";

export default function AddProductPage() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    imageUrl: "",
    category: "burger",
    description: "",
  });
  const { token } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProduct(formData, token);
    navigate("/admin/products");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <ProductForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
