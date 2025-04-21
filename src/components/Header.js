import { LOGO_URL } from "../utlis/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utlis/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const onlineStatus = useOnlineStatus();

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg px-4 py-3">
      <div className="flex justify-between items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-3">
          <img src={LOGO_URL} alt="Logo" className="w-12 rounded-full" />
          <h1 className="text-lg sm:text-xl font-bold text-black">FoodieHub</h1>
        </div>

        <button
          className="sm:hidden text-2xl text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        <nav className="hidden sm:flex items-center space-x-6 text-gray-800 font-medium">
          <span>Online Status: {onlineStatus ? "✅" : "❌"}</span>
          <Link to="/" className="hover:text-blue-700">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-700">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-700">
            Contact
          </Link>
          <Link to="/grocery" className="hover:text-blue-700">
            Grocery
          </Link>
          <span className="hover:text-blue-700">Cart</span>
          <button
            className="ml-4 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
            onClick={() => setbtnName(btnName === "Login" ? "Logout" : "Login")}
          >
            {btnName}
          </button>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden flex flex-col items-start mt-4 space-y-3 text-gray-700 font-medium">
          <span>Online Status: {onlineStatus ? "✅" : "❌"}</span>
          <Link to="/" className="hover:text-blue-700">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-700">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-700">
            Contact
          </Link>
          <Link to="/grocery" className="hover:text-blue-700">
            Grocery
          </Link>
          <span className="hover:text-blue-700">Cart</span>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            onClick={() => setbtnName(btnName === "Login" ? "Logout" : "Login")}
          >
            {btnName}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
