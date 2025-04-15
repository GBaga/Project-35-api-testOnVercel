import React from "react";

const Cart = ({ cart, onRemoveFromCart }) => {
  const totalPrice = Object.values(cart).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed top-16 right-4 p-6 bg-white shadow-lg rounded-lg w-80 max-h-[90vh] overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {Object.keys(cart).length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          {Object.values(cart).map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center mb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="h-16 w-16 object-cover rounded-md"
                />
                <div>
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p>Price: {item.price}₾</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
              <button
                onClick={() => onRemoveFromCart(item._id)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4 flex justify-between">
            <p className="font-bold">Total: {totalPrice}₾</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
