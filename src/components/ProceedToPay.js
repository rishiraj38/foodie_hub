import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../utlis/cartSlice";
import { useNavigate } from "react-router-dom";

const ProceedToPay = () => {
  const location = useLocation();
  const { totalAmount } = location.state || { totalAmount: 0 };
  const dispatch = useDispatch();
    const navigate = useNavigate();

  const [isPaid, setIsPaid] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod"); 
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePayment = () => {
    if (formData.name && formData.address) {
      setIsPaid(true);
      dispatch(clearCart()); 
    } else {
      alert("Please enter your name and address.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-pink-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        {!isPaid ? (
          <>
            <h2 className="text-3xl font-extrabold text-center text-purple-700 mb-6">
              Proceed to Pay
            </h2>
            <p className="text-lg text-center font-medium text-gray-800 mb-4">
              Total Amount:{" "}
              <span className="text-green-600">₹{totalAmount}</span>
            </p>

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-2"
              />
              <textarea
                name="address"
                placeholder="Your Address"
                rows="3"
                value={formData.address}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-2"
              />

              {/* Payment Method Selection */}
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                  />
                  Cash on Delivery
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="online"
                    checked={paymentMethod === "online"}
                    onChange={() => setPaymentMethod("online")}
                  />
                  Pay Online
                </label>
              </div>

              {/* Show card form if Pay Online */}
              {paymentMethod === "online" && (
                <div className="space-y-3 pt-2 border-t border-gray-200">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    className="w-full border border-gray-300 rounded-xl px-4 py-2"
                  />
                  <div className="flex gap-4">
                    <input
                      type="text"
                      name="expiry"
                      placeholder="MM/YY"
                      className="w-1/2 border border-gray-300 rounded-xl px-4 py-2"
                    />
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      className="w-1/2 border border-gray-300 rounded-xl px-4 py-2"
                    />
                  </div>
                  <p className="text-sm text-gray-500">
                    * This is a mock payment form for UI purposes only.
                  </p>
                </div>
              )}

              <button
                onClick={handlePayment}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-xl transition transform hover:scale-105 active:scale-95 mt-4"
              >
                Pay Now
              </button>
            </div>
          </>
        ) : (
          <div className="text-center space-y-4">
            <div className="text-green-600 text-6xl animate-bounce">✅</div>
            <h3 className="text-2xl font-bold text-gray-800">
              Thanks for shopping!
            </h3>
            <p className="text-lg text-gray-600">Your order is on the way 🚚</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-xl transition transform hover:scale-105 active:scale-95 mt-4" onClick={() => navigate("/")}>Go to Home</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProceedToPay;
