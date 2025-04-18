// EditProductPage.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct, updateProduct } from "../../services/product";
import useAuth from "../../hooks/useAuth";
import ProductForm from "../../components/ProductForm";

export default function EditProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    imageUrl: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    getProduct(id).then((res) => setFormData(res.data));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(id, formData, token);
    navigate("/admin/products");
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
