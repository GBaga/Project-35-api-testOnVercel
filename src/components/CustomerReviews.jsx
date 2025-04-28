import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah J.",
    rating: 5,
    text: "Best fast food in town! The burgers are always fresh and the service is quick.",
  },
  {
    id: 2,
    name: "Mike T.",
    rating: 4,
    text: "Great value for money. My family loves the weekend deals. Will order again!",
  },
  {
    id: 3,
    name: "Lisa R.",
    rating: 5,
    text: "The app makes ordering so easy, and the food is always hot and delicious.",
  },
  {
    id: 4,
    name: "Daniel K.",
    rating: 3,
    text: "Good food, but delivery took a bit longer than expected. Still worth it.",
  },
  {
    id: 5,
    name: "Emily N.",
    rating: 5,
    text: "Absolutely love their fries! Crispy, golden, and perfectly seasoned every time.",
  },
  {
    id: 6,
    name: "Raj P.",
    rating: 4,
    text: "Easy checkout and fast delivery. Would love to see more vegetarian options though.",
  },
  {
    id: 7,
    name: "Anna L.",
    rating: 5,
    text: "My go-to spot for quick lunches. The chicken wraps are amazing!",
  },
  {
    id: 8,
    name: "George M.",
    rating: 2,
    text: "Food was okay, but my drink was missing from the order. Hope it's better next time.",
  },
  {
    id: 9,
    name: "Nina B.",
    rating: 5,
    text: "Impressed with the quality and portion sizes. Worth every penny.",
  },
  {
    id: 10,
    name: "Tom S.",
    rating: 4,
    text: "Love the new spicy burger! Delivery was on time and everything was hot.",
  },
];

const CustomerReviews = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const visibleReviews = [
    reviews[startIndex],
    reviews[(startIndex + 1) % reviews.length],
    reviews[(startIndex + 2) % reviews.length],
  ];

  const handlePrev = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setStartIndex((prevIndex) => (prevIndex + 1) % reviews.length);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-800">
          What Our Customers Say
        </h2>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700">
            {visibleReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between"
              >
                <div className="mb-4">
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${
                          i < review.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 italic leading-relaxed">
                    "{review.text}"
                  </p>
                </div>
                <p className="mt-6 text-red-600 font-semibold">{review.name}</p>
              </div>
            ))}
          </div>

          {/* Side Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:left-[-20px] top-2/5 transform -translate-y-1/2 bg-white hover:bg-red-600 text-red-600 hover:text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10 focus:outline-none focus:ring-2 focus:ring-red-400 cursor-pointer"
            disabled={isAnimating}
            aria-label="Previous reviews"
          >
            <ChevronLeft
              size={24}
              className="transition-transform group-hover:scale-125"
            />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 md:right-[-20px] top-2/5 transform -translate-y-1/2 bg-white hover:bg-red-600 text-red-600 hover:text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10 focus:outline-none focus:ring-2 focus:ring-red-400 cursor-pointer"
            disabled={isAnimating}
            aria-label="Next reviews"
          >
            <ChevronRight
              size={24}
              className="transition-transform group-hover:scale-125"
            />
          </button>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.slice(0, reviews.length - 2).map((_, index) => (
              <span
                key={index}
                className={`block w-2 h-2 rounded-full transition-all duration-300 ${
                  index === startIndex ? "bg-red-600 scale-125" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
