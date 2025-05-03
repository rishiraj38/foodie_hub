import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utlis/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  console.log(store);

  const totalAmount =
    cartItems.reduce(
      (total, item) =>
        total +
        (item?.card?.info?.price || item?.card?.info?.defaultPrice || 0),
      0
    ) / 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6">
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-4xl font-extrabold text-purple-600 animate-pulse mb-8 text-center">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            🛒 Your cart is empty.
          </p>
        ) : (
          <>
            <div className="space-y-5">
              {cartItems.map((item, index) => {
                const info = item.card.info;
                const category = info.category;
                const price = (info.price || info.defaultPrice || 0) / 100;

                return (
                  <div
                    key={index}
                    className="flex items-center bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-4 gap-4 transition transform hover:scale-105 hover:shadow-2xl"
                  >
                    {info.imageId && (
                      <img
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.imageId}`}
                        alt={info.name}
                        className="w-24 h-24 rounded-xl object-cover border-2 border-gray-200"
                      />
                    )}
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-800">
                        {info.name}
                      </h2>
                      <p className="text-sm text-gray-500 mb-1">
                        Category: {category}
                      </p>
                      <p className="text-blue-600 font-semibold text-lg">
                        ₹{price}
                      </p>
                    </div>
                    <button
                      onClick={() => dispatch(removeItem(index))}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 active:scale-95 transition"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-5">
              <p className="text-3xl font-bold text-gray-800 drop-shadow-lg">
                Total:{" "}
                <span className="text-purple-600 animate-pulse">
                  ₹{totalAmount}
                </span>
              </p>
              <button
                onClick={() => dispatch(clearCart())}
                className="bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-3 rounded-2xl text-lg font-medium hover:from-red-600 hover:to-red-800 active:scale-95 transition"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
