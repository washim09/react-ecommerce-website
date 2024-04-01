import { useState } from "react";
import { useCart } from "./CartContext";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const [showQRCode, setShowQRCode] = useState(false);

  console.log(cart); // Log the cart to inspect its structure and contents

  const subtotal = cart.reduce((acc, item) => {
    const itemPrice = typeof item.price === "string" ? parseFloat(item.price) : item.price; // Parse price as a float if it's a string
    return acc + itemPrice * Number(item.quantity);
  }, 0).toFixed(2);

  console.log("Subtotal:", subtotal); // Log the subtotal to check its value

  const handleCheckout = () => {
    // Show the QR code image when the user clicks on checkout button
    setShowQRCode(true);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 pt-28">
      <div className="max-w-md w-full p-4 bg-white rounded-lg shadow-xl">
        <div className="text-lg font-medium text-gray-900 mb-4">
          Shopping cart
        </div>

        <ul className="divide-y divide-gray-200">
          {cart.map((item, index) => (
            <li key={index} className="flex py-4">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src={item.imagePath}
                  alt={item.text1}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="ml-4 flex flex-1 flex-col">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>{item.text1}</h3>
                  <p className="ml-4">${item.price.toFixed(2)}</p>{" "}
                  {/* Format the price with a dollar sign and two decimal places */}
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  {/* Display quantity */}
                  <p>Qty: {item.quantity}</p>
                  <button
                    type="button"
                    className="font-medium text-green-600 hover:text-green-500"
                    onClick={() => removeFromCart(item.imagePath)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="border-t border-gray-200 pt-4 mt-4">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            {/* Display subtotal */}
            <p>${subtotal}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <button
              className="flex items-center justify-center rounded-md border border-transparent bg-green-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-600"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or{" "}
              <button
                type="button"
                className="font-medium text-green-600 hover:text-green-500"
              >
                Continue Shopping <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Display Paytm QR code image when showQRCode is true */}
      {showQRCode && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <img src="/qrcode.jpg" alt="Paytm QR Code" />
            <button
              className="mt-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md"
              onClick={() => setShowQRCode(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
