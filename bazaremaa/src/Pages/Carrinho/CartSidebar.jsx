// src/components/CartSidebar.jsx
import React from "react";

const CartSidebar = ({
  cart = [],
  setCart = () => {},
  isOpen = false,
  toggleCart = () => {},
}) => {
  const updateQuantity = (productId, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = Array.isArray(cart)
    ? cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    : 0;

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }

    const orderDetails = cart
      .map(
        (item) =>
          `${item.name} (${item.quantity}x) - R$ ${(item.price * item.quantity)
            .toFixed(2)
            .replace(".", ",")}`
      )
      .join("\n");
    const totalText = `\n\nTotal: R$ ${total.toFixed(2).replace(".", ",")}`;

    navigator.clipboard.writeText(orderDetails + totalText);
    alert("Detalhes do pedido copiados para a área de transferência!");
  };

  return (
    <div
      className={`fixed inset-y-0 right-0 w-80 bg-white shadow-xl z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out overflow-y-auto p-6`}
    >
      <div className="flex justify-between items-center border-b-2 pb-4 mb-4">
        <h3 className="text-2xl font-bold text-gray-800">Seu Carrinho</h3>
        <button
          onClick={toggleCart}
          className="text-gray-500 hover:text-gray-800 text-3xl font-light"
        >
          &times;
        </button>
      </div>

      <div className="space-y-4">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500 italic mt-8">
            O carrinho está vazio.
          </p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded-md"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-600">
                    R$ {item.price.toFixed(2).replace(".", ",")} x{" "}
                    {item.quantity}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-gray-700">
                  R${" "}
                  {(item.price * item.quantity).toFixed(2).replace(".", ",")}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="text-red-500 hover:text-red-700"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.324 21H7.676a2 2 0 01-1.993-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-8 pt-4 border-t-2 text-right">
        <p className="text-xl font-semibold text-gray-700">
          Total:{" "}
          <span className="text-2xl text-green-600 font-bold">
            R$ {total.toFixed(2).replace(".", ",")}
          </span>
        </p>
        <button
          onClick={handleCheckout}
          className="mt-4 w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-lg"
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;
