import React from "react";
import { Link } from "react-router-dom";
import { Phone, Clock, MapPin } from "lucide-react";

function Footer() {
  return (
    <div>
      {/* Info Section */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <Clock className="mr-4" size={40} />
              <div>
                <h3 className="text-xl font-bold mb-1">Opening Hours</h3>
                <p>Mon-Thu: 10am - 10pm</p>
                <p>Fri-Sun: 10am - 12am</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="mr-4" size={40} />
              <div>
                <h3 className="text-xl font-bold mb-1">Call Us</h3>
                <p>Order by phone:</p>
                <p>(555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-4" size={40} />
              <div>
                <h3 className="text-xl font-bold mb-1">Find Us</h3>
                <p>123 Main Street</p>
                <p>Foodville, CA 90210</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FastFood</h3>
              <p className="text-gray-400">
                Delicious food delivered fast to your door or ready for pickup.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/menu" className="text-gray-400 hover:text-white">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link to="/deals" className="text-gray-400 hover:text-white">
                    Deals
                  </Link>
                </li>
                <li>
                  <Link
                    to="/locations"
                    className="text-gray-400 hover:text-white"
                  >
                    Locations
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Help</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/faq" className="text-gray-400 hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-white"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-400 hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} FastFood. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
