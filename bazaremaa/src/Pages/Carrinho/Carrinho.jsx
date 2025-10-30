import React from "react";
import CartSidebar from "./CartSidebar";

const Carrinho = () => {
  const produtos = [
    { name: "Camisa Azul", price: 99.9, quantity: 1 },
    { name: "Tênis Branco", price: 199.9, quantity: 2 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 pt-24">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Seu Carrinho</h2>

      {/* Carrinho renderizado na página */}
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-6">
        <CartSidebar isOpen={true} onClose={() => {}} cartItems={produtos} />
      </div>
    </div>
  );
};

export default Carrinho;
