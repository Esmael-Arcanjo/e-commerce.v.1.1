import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Carrinho = () => {
  const [carrinho, setCarrinho] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const itens = JSON.parse(localStorage.getItem("carrinho")) || [];
    setCarrinho(itens);
  }, []);

  useEffect(() => {
    const soma = carrinho.reduce((acc, item) => acc + (item.preco || 0), 0);
    setTotal(soma);
  }, [carrinho]);

  const removerItem = (id) => {
    const novoCarrinho = carrinho.filter((item) => item.id !== id);
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
  };

  const finalizarCompra = () => {
    alert("🛍️ Compra finalizada com sucesso!");
    localStorage.removeItem("carrinho");
    navigate("/");
  };

  if (carrinho.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-gray-700">
        <h2 className="text-2xl font-semibold mb-4">🛒 Seu carrinho está vazio</h2>
        <button
          className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
          onClick={() => navigate("/")}
        >
          Voltar às compras
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">🛒 Meu Carrinho</h2>

      <div className="space-y-4">
        {carrinho.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center sm:items-start bg-white shadow-md rounded-lg p-4"
          >
            <img
              src={item.imagem}
              alt={item.nome}
              className="w-32 h-32 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-6"
            />
            <div className="flex-1">
              <h4 className="text-lg font-medium">{item.nome}</h4>
              <p className="text-gray-600">📍 {item.cidade}, {item.pais}</p>
              <p className="text-gray-600">Vendedor: {item.vendedor}</p>
              <p className="text-yellow-500 font-semibold mt-2 text-lg">
                R$ {item.preco?.toFixed(2) || "0.00"}
              </p>
            </div>
            <button
              className="mt-4 sm:mt-0 sm:ml-4 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              onClick={() => removerItem(item.id)}
            >
              ❌ Remover
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center bg-gray-100 p-4 rounded-lg">
        <p className="text-lg font-semibold">
          Total: <span className="text-yellow-500">R$ {total.toFixed(2)}</span>
        </p>
        <button
          className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors"
          onClick={finalizarCompra}
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};

export default Carrinho;
