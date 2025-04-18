import { LOGO_URL } from "../utlis/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utlis/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg p-4">
      <div className="logo-container flex items-center space-x-4">
        <img className="w-16 rounded-full" src={LOGO_URL} alt="Website Logo" />
        <h1 className="text-xl font-semibold text-black">FoodieHub</h1>
      </div>
      <div className="flex items-center space-x-6">
        <ul className="flex space-x-4 text-gray-700">
          <li className="text-base font-medium hover:text-blue-600 transition-colors">
            Online Status: {onlineStatus ? "✅" : "❌"}
          </li>
          <li className="text-base font-medium hover:text-blue-600 transition-colors">
            <Link to="/">Home</Link>
          </li>
          <li className="text-base font-medium hover:text-blue-600 transition-colors">
            <Link to="/about">About</Link>
          </li>
          <li className="text-base font-medium hover:text-blue-600 transition-colors">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="text-base font-medium hover:text-blue-600 hover:scale-105 transition-all duration-200">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="text-base font-medium hover:text-blue-600 hover:scale-105 transition-all duration-200">
            Cart
          </li>
        </ul>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
          onClick={() => {
            setbtnName(btnName === "Login" ? "Logout" : "Login");
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
