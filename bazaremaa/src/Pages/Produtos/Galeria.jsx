import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import produtos from "../../components/data/produtos";
import { useCarrinho } from "../../contexts/CartContext";
import { FaShoppingCart, FaBolt } from "react-icons/fa";

const Galeria = ({ limite }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { adicionarAoCarrinho } = useCarrinho();

  const params = new URLSearchParams(location.search);
  const pais = params.get("pais") || "";
  const cidade = params.get("cidade") || "";
  const busca = params.get("q") || "";

  const listaFiltrada = produtos.filter((p) => {
    const matchPais = pais ? p.pais === pais : true;
    const matchCidade = cidade ? p.cidade === cidade : true;
    const matchBusca = busca
      ? p.nome.toLowerCase().includes(busca.toLowerCase())
      : true;
    return matchPais && matchCidade && matchBusca;
  });

  const lista = limite ? listaFiltrada.slice(0, limite) : listaFiltrada;

  const handleComprar = (produto) => {
    navigate(`/comprar/${produto.id}`, { state: { produto } });
  };

  if (lista.length === 0) {
    return <p className="text-center text-gray-600 mt-10 text-lg">Nenhum produto encontrado.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {lista.map((p) => (
        <div
          key={p.id}
          className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
        >
          <div className="relative">
            <img
              src={p.imagem}
              alt={p.nome}
              className="w-full h-48 object-cover"
            />

            {/* Botões de ação na parte inferior direita, um embaixo do outro, custom bottom */}
            <div className="absolute bottom-[50px] right-2 flex flex-col gap-17">
              <button
                className="bg-emerald-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                title="Comprar agora"
                onClick={() => handleComprar(p)}
              >
                <FaBolt />
              </button>

              <button
                className="bg-indigo-800 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                title="Adicionar ao carrinho"
                onClick={() => adicionarAoCarrinho(p)}
              >
                <FaShoppingCart />
              </button>
            </div>
          </div>

          <div className="p-4 flex-1 flex flex-col justify-between">
            <div className="space-y-1">
              <p className="text-sm text-gray-500">{p.categoria}</p>
              <h3 className="text-lg font-semibold text-gray-800">{p.nome}</h3>
              <p className="text-sm text-gray-600">
                📍 {p.cidade}, {p.pais} <br />
                <span className="font-medium">👤 {p.vendedor}</span>
              </p>
            </div>

            <div className="mt-2 flex items-center justify-between">
              <p className="text-red-600 font-bold text-lg">R$ {p.preco?.toFixed(2) || "0.00"}</p>
              <div className="flex items-center text-yellow-400 text-sm">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>
                    {i < Math.floor(p.avaliacao) ? "★" : "☆"}
                  </span>
                ))}
                <span className="ml-1 text-gray-500">({p.avaliacao.toFixed(1)})</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Galeria;
