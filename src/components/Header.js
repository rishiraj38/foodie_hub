import { LOGO_URL } from "../utlis/constants";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utlis/useOnlineStatus";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../utlis/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utlis/userSlice";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // handled by onAuthStateChanged
      })
      .catch((error) => {
        navigate("/error" + error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/body");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        showHeader ? "opacity-100" : "opacity-0"
      } bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg px-4 py-3`}
    >
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

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center space-x-6 text-gray-800 font-medium">
          <span>Online Status: {onlineStatus ? "✅" : "❌"}</span>
          <Link to="/body" className="hover:text-blue-700">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-700">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-700">
            Contact
          </Link>
          <Link
            to="/cart"
            className="hover:text-blue-700 font-bold flex items-center"
          >
            <FaCartShopping className="size-6 mr-1" /> ({cartItems.length})
          </Link>

          {user ? (
            <button
              className="ml-4 bg-black text-white px-4 py-1 rounded hover:bg-gray-900 transition"
              onClick={handleSignOut}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="ml-4 bg-black text-white px-4 py-1 rounded hover:bg-gray-900 transition"
            >
              Login
            </Link>
          )}
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col items-start mt-4 space-y-3 text-gray-700 font-medium">
          <span>Online Status: {onlineStatus ? "✅" : "❌"}</span>
          <Link to="/body" className="hover:text-blue-700">
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
          <Link to="/cart" className="hover:text-blue-700">
            Cart ({cartItems.length})
          </Link>

          {user ? (
            <button
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition"
              onClick={handleSignOut}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
