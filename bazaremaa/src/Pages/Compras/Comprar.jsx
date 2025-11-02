import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Comprar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const produto = location.state?.produto;

  if (!produto) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-700">
        <p className="text-xl font-medium">Produto não encontrado.</p>
      </div>
    );
  }

  const finalizarCompra = () => {
    alert("🛍️ Compra finalizada com sucesso!");
    navigate("/");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">🛍️ Comprar Agora</h2>

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="w-64 h-64 object-cover rounded-lg shadow-md"
        />

        <div className="flex-1 text-gray-700 space-y-2">
          <h3 className="text-xl font-semibold">{produto.nome}</h3>
          <p className="text-sm text-gray-500">{produto.categoria}</p>
          <p className="text-sm">📍 {produto.cidade}, {produto.pais}</p>
          <p className="text-sm">Vendedor: {produto.vendedor}</p>
          <p className="text-yellow-500 text-lg font-bold mt-2">
            R$ {produto.preco?.toFixed(2) || "0.00"}
          </p>

          <div className="mt-4 flex gap-4 flex-wrap">
            <button
              className="px-6 py-2 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
              onClick={finalizarCompra}
            >
              Finalizar Compra
            </button>
            <button
              className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition-colors"
              onClick={() => navigate(-1)}
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comprar;
