const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 text-center md:text-left">
        {/* Brand and Description */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-orange-500">FoodieHub</h1>
          <p className="text-sm text-gray-400 mt-2">
            Delivering happiness, one meal at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul>
              <li>
                <a
                  href="/about"
                  className="text-sm text-gray-400 hover:text-orange-500"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-sm text-gray-400 hover:text-orange-500"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm text-gray-400 hover:text-orange-500"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-gray-400 hover:text-orange-500"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <ul>
              <li>
                <a
                  href="/faq"
                  className="text-sm text-gray-400 hover:text-orange-500"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/help"
                  className="text-sm text-gray-400 hover:text-orange-500"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="/track-order"
                  className="text-sm text-gray-400 hover:text-orange-500"
                >
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Connect</h3>
            <ul>
              <li>
                <a
                  href="/facebook"
                  className="text-sm text-gray-400 hover:text-orange-500"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="/instagram"
                  className="text-sm text-gray-400 hover:text-orange-500"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="/twitter"
                  className="text-sm text-gray-400 hover:text-orange-500"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="/linkedin"
                  className="text-sm text-gray-400 hover:text-orange-500"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Download App</h3>
            <ul>
              <li>
                <a
                  href="/download/android"
                  className="text-sm text-gray-400 hover:text-orange-500"
                >
                  Android
                </a>
              </li>
              <li>
                <a
                  href="/download/ios"
                  className="text-sm text-gray-400 hover:text-orange-500"
                >
                  iOS
                </a>
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
