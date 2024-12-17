"use client";
import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const ShoppingCart = () => {
  // Sample cart items for demonstration
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Pizza", price: 12.99, quantity: 1 },
    { id: 2, name: "Burger", price: 8.99, quantity: 2 },
    { id: 3, name: "Pasta", price: 10.49, quantity: 1 },
  ]);

  const handleRemoveItem = (id: number) => {
    // Remove the item from the cart based on the id
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    // Calculate the total price of all items in the cart
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold">Your Shopping Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between items-center">
                <div>
                  <p>{item.name}</p>
                  <p className="text-sm text-gray-500">x{item.quantity}</p>
                </div>
                <div>
                  <span className="text-gray-600">${(item.price * item.quantity).toFixed(2)}</span>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 ml-2 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <div className="flex justify-between">
              <span className="font-bold">Total:</span>
              <span className="text-lg font-semibold">${calculateTotal()}</span>
            </div>
            <div className="mt-4 flex justify-between">
              <button className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition">
                Checkout
              </button>
            </div>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => setCartItems([])}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
