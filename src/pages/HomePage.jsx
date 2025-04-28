import { Link } from "react-router-dom";
import { ShoppingCart, Menu, Clock } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { getProducts } from "../services/product";
import CustomerReviews from "../components/CustomerReviews";

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      // Select only the first three products
      setFeaturedProducts(res.data.products.slice(0, 3));
    });
  }, []);

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20 relative overflow-hidden">
        {/* Abstract geometric shapes for modern feel */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 opacity-20 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-red-700 opacity-20 rounded-full -ml-10 -mb-10"></div>

        <div className="container mx-auto text-center px-4 relative">
          <h1 className="text-6xl font-bold mb-6 tracking-tight">
            Welcome to <span className="text-yellow-300">FastFood!</span>
          </h1>
          <p className="text-xl mb-10 max-w-2xl mx-auto font-light">
            Delicious meals ready to take away. Quick, fresh and flavorful
            options at your fingertips.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <Link
              to="/menu"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-lg transform hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto"
            >
              Browse Menu
            </Link>
            <Link
              to="/order"
              className="bg-yellow-400 text-red-700 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition shadow-lg transform hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto"
            >
              Order Online
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Featured Items
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/menu"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Special Deals */}
      {/* <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Today's Special Deals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/2 h-64 bg-gray-200">
                <img
                  src={`/api/placeholder/400/320`}
                  alt="Family Meal Deal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6">
                <div className="bg-yellow-400 text-red-700 inline-block px-3 py-1 rounded-full text-sm font-bold mb-3">
                  SAVE 25%
                </div>
                <h3 className="text-xl font-bold mb-2">Family Meal Deal</h3>
                <p className="text-gray-600 mb-4">
                  4 burgers, 2 large fries, 4 drinks and 2 desserts. Perfect for
                  family dinner.
                </p>
                <div className="flex items-center mb-4">
                  <span className="text-lg font-bold text-red-600 mr-2">
                    $24.99
                  </span>
                  <span className="text-gray-500 line-through">$32.99</span>
                </div>
                <button className="bg-red-600 text-white px-4 py-2 rounded font-medium hover:bg-red-700 transition">
                  Order Now
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/2 h-64 bg-gray-200">
                <img
                  src={`/api/placeholder/400/320`}
                  alt="Lunch Special"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6">
                <div className="bg-yellow-400 text-red-700 inline-block px-3 py-1 rounded-full text-sm font-bold mb-3">
                  WEEKDAY ONLY
                </div>
                <h3 className="text-xl font-bold mb-2">Lunch Special</h3>
                <p className="text-gray-600 mb-4">
                  Any burger, fries and drink. Available Monday to Friday, 11am
                  - 3pm.
                </p>
                <div className="flex items-center mb-4">
                  <span className="text-lg font-bold text-red-600">$9.99</span>
                </div>
                <button className="bg-red-600 text-white px-4 py-2 rounded font-medium hover:bg-red-700 transition">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* How It Works */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Menu className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Select Your Food</h3>
              <p className="text-gray-600">
                Browse our menu and choose from a variety of delicious options.
              </p>
            </div>
            <div>
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Place Your Order</h3>
              <p className="text-gray-600">
                Customize your meal and add items to your cart for checkout.
              </p>
            </div>
            <div>
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Ready in Minutes</h3>
              <p className="text-gray-600">
                Pick up your order at your chosen location or get delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      {/* <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-xl ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                <p className="font-bold">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <CustomerReviews />
    </div>
  );
}
