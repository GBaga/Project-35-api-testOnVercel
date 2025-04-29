import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { register as registerApi } from "../services/auth";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-hot-toast";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    secondMobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  // Live validation every time form changes
  useEffect(() => {
    validateForm();
  }, [form]);

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{8,15}$/.test(form.mobile)) {
      newErrors.mobile = "Mobile number must be 8-15 digits";
    }

    if (form.secondMobile && !/^\d{8,15}$/.test(form.secondMobile)) {
      newErrors.secondMobile = "Second mobile must be 8-15 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);
      await registerApi({
        name: form.name,
        email: form.email,
        password: form.password,
        mobile: form.mobile,
        secondMobile: form.secondMobile || undefined,
      });
      toast.success("Account created successfully!");
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = () => {
    return (
      Object.keys(errors).length === 0 &&
      form.name.trim() &&
      form.email.trim() &&
      form.password &&
      form.confirmPassword &&
      form.mobile
    );
  };

  return (
    <div className="p-6 max-w-md mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-red-600">
        Create Your Account
      </h2>
      <form onSubmit={handleSubmit} className="grid gap-5">
        {/* Name */}
        <div className="flex flex-col">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="border px-4 py-2 rounded focus:ring-2 focus:ring-red-300"
            autoFocus
          />
          {errors.name && (
            <p className="text-sm text-red-600 mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="border px-4 py-2 rounded focus:ring-2 focus:ring-red-300"
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col relative">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password (min 8 characters)"
            value={form.password}
            onChange={handleChange}
            className="border px-4 py-2 rounded focus:ring-2 focus:ring-red-300 pr-10"
          />
          <span
            className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
          {errors.password && (
            <p className="text-sm text-red-600 mt-1">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col relative">
          <input
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="border px-4 py-2 rounded focus:ring-2 focus:ring-red-300 pr-10"
          />
          <span
            className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
          {errors.confirmPassword && (
            <p className="text-sm text-red-600 mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        {/* Mobile */}
        <div className="flex flex-col">
          <input
            name="mobile"
            type="text"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
            className="border px-4 py-2 rounded focus:ring-2 focus:ring-red-300"
          />
          {errors.mobile && (
            <p className="text-sm text-red-600 mt-1">{errors.mobile}</p>
          )}
        </div>

        {/* Second Mobile (optional) */}
        <div className="flex flex-col">
          <input
            name="secondMobile"
            type="text"
            placeholder="Second Mobile (optional)"
            value={form.secondMobile}
            onChange={handleChange}
            className="border px-4 py-2 rounded focus:ring-2 focus:ring-red-300"
          />
          {errors.secondMobile && (
            <p className="text-sm text-red-600 mt-1">{errors.secondMobile}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className={`bg-red-600 text-white py-2 rounded hover:bg-red-700 transition ${
            loading || !isFormValid() ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!isFormValid() || loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}
