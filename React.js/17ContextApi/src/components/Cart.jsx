import { UseCartContext } from "../context/CartContext";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const { cartItems, removeCart, updateQuantity } = UseCartContext();

  if (cartItems.length === 0) {
    return (
      <h2 className="text-center mt-10 text-lg text-gray-500">
        🛒 Your cart is empty.
      </h2>
    );
  }

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-center text-3xl font-extrabold mb-8 text-gray-800">
        Your Cart
      </h1>

      <div className="grid gap-6">
        {cartItems.map((item) => (
          <div
            key={item._id}
            className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition-all duration-300"
          >
            {/* Product Info */}
            <div className="flex items-center gap-4 w-full md:w-2/5">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain rounded-md"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-500">${item.price}</p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <button
                onClick={() =>
                  updateQuantity(item._id, Math.max(1, item.quantity - 1))
                }
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-100"
              >
                -
              </button>
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) =>
                  updateQuantity(item._id, Math.max(1, Number(e.target.value)))
                }
                className="w-14 border rounded-lg p-1 text-center"
              />
              <button
                onClick={() => updateQuantity(item._id, item.quantity + 1)}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-100"
              >
                +
              </button>
            </div>

            {/* Total Price */}
            <div className="text-lg font-bold text-blue-600 mt-4 md:mt-0">
              ${(item.price * item.quantity).toFixed(2)}
            </div>

            {/* Remove Button */}
            <button
              onClick={() => removeCart(item._id)}
              className="mt-4 cursor-pointer md:mt-0 flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-xl shadow hover:bg-red-600 transition"
            >
              <Trash2 className="w-4 h-4" /> Remove
            </button>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="mt-10 bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-xl font-semibold">
          Subtotal:{" "}
          <span className="text-blue-600 font-bold">
            ${subtotal.toFixed(2)}
          </span>
        </h2>
        <button className="mt-4 cursor-pointer md:mt-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl shadow hover:opacity-90 transition font-medium">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
