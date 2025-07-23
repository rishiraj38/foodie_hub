import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-black text-white py-12">
      <div className="container mx-auto px-6 text-center md:text-left">
        {/* Brand and Description */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-orange-500">FoodieHub</h1>
          <p className="text-sm text-gray-400 mt-2">
            Delivering happiness, one meal at Link time.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-400 hover:text-orange-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-sm text-gray-400 hover:text-orange-500"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-400 hover:text-orange-500"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-gray-400 hover:text-orange-500"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <ul>
              <li>
                <Link
                  to="/faq"
                  className="text-sm text-gray-400 hover:text-orange-500"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/help"
                  className="text-sm text-gray-400 hover:text-orange-500"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/track-order"
                  className="text-sm text-gray-400 hover:text-orange-500"
                >
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Connect</h3>
            <ul>
              <li>
                <Link
                  to="/facebook"
                  className="text-sm text-gray-400 hover:text-orange-500"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  to="/instagram"
                  className="text-sm text-gray-400 hover:text-orange-500"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  to="/twitter"
                  className="text-sm text-gray-400 hover:text-orange-500"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  to="/linkedin"
                  className="text-sm text-gray-400 hover:text-orange-500"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Download App</h3>
            <ul>
              <li>
                <Link
                  to="/download/android"
                  className="text-sm text-gray-400 hover:text-orange-500"
                >
                  Android
                </Link>
              </li>
              <li>
                <Link
                  to="/download/ios"
                  className="text-sm text-gray-400 hover:text-orange-500"
                >
                  iOS
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Small Text */}
        <div className="border-t border-gray-700 pt-4">
          <p className="text-xs text-gray-400">
            &copy; 2025 FoodieHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
