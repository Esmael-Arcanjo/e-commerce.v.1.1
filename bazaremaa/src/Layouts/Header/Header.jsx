import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaSignInAlt,
  FaTags
} from "react-icons/fa";
import { useCarrinho } from "../../contexts/CartContext";
import { cidadesPorPais } from "../../components/cidade";

const Header = () => {
  const navigate = useNavigate();

  const [paisSelecionado, setPaisSelecionado] = useState("");
  const [cidadeSelecionada, setCidadeSelecionada] = useState("");
  const [termoBusca, setTermoBusca] = useState("");

  const { carrinho } = useCarrinho();
  const quantidadeCarrinho = carrinho.length;

  const handleBusca = () => {
    if (!paisSelecionado) {
      alert("Por favor, selecione o país antes de buscar produtos.");
      return;
    }
    if (!cidadeSelecionada) {
      alert("Por favor, selecione a cidade antes de buscar produtos.");
      return;
    }
    if (!termoBusca.trim()) {
      alert("Por favor, digite o nome do produto.");
      return;
    }

    navigate(
      `/produtos?pais=${paisSelecionado}&cidade=${cidadeSelecionada}&q=${termoBusca}`
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-indigo-700 border-b-4 border-yellow-500 shadow-md text-lg font-semibold">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-3 font-semibold">

        {/* Left Section: Logo + Busca */}
        <div className="flex items-center space-x-5">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="src/assets/img/logo/logoemaa.svg"
              alt="Bazar"
              className="h-10 sm:h-16"
            />
          </Link>

          {/* Barra de busca */}
          <div className="hidden lg:flex items-center ml-4 border rounded-lg overflow-hidden bg-white shadow-sm">
            <select
              className="p-2 text-sm bg-gray-100 border-r border-gray-300 focus:outline-none"
              value={paisSelecionado}
              onChange={(e) => {
                setPaisSelecionado(e.target.value);
                setCidadeSelecionada("");
              }}
            >
              <option value="">Selecione seu País</option>
              {Object.keys(cidadesPorPais).map((pais) => (
                <option key={pais}>{pais}</option>
              ))}
            </select>

            <select
              className="p-2 text-sm text-gray-700 bg-gray-100 border-r border-white focus:outline-none disabled:bg-gray-200"
              value={cidadeSelecionada}
              onChange={(e) => setCidadeSelecionada(e.target.value)}
              disabled={!paisSelecionado}
            >
              <option value="">Cidade</option>
              {paisSelecionado &&
                cidadesPorPais[paisSelecionado].map((cidade) => (
                  <option key={cidade}>{cidade}</option>
                ))}
            </select>

            <input
              type="text"
              placeholder={
                !paisSelecionado || !cidadeSelecionada
                  ? "Selecione país e cidade primeiro"
                  : "Nome do produto..."
              }
              className={`p-2 text-gray-800 text-sm w-64 focus:outline-none transition-colors ${
                !paisSelecionado || !cidadeSelecionada
                  ? "bg-gray-200 cursor-not-allowed"
                  : "bg-white"
              }`}
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleBusca()}
              disabled={!paisSelecionado || !cidadeSelecionada}
            />

            <button
              className={`p-3 transition-colors ${
                paisSelecionado && cidadeSelecionada && termoBusca.trim()
                  ? "bg-[#F51720] text-white hover:bg-black"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
              onClick={handleBusca}
              disabled={!paisSelecionado || !cidadeSelecionada || !termoBusca.trim()}
            >
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Navegação direita */}
        <nav className="flex items-center space-x-6 text-white font-bold font-sans">

          {/* Botão Entrar */}
          <Link
            to="/login"
            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800 transition-colors text-base"
          >
            <FaSignInAlt className="w-6 h-6" />
            <span>Entrar</span>
          </Link>

          {/* Botão: Venda seus Produtos */}
          <Link
            to="/anunciar"
            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800 transition-colors text-base text-white"
          >
            <FaTags className="w-6 h-6" />
            <span>Venda seus Produtos</span>
          </Link>

          {/* Botão Carrinho */}
          <div className="relative">
            <Link
              to="/carrinho"
              className="relative flex items-center space-x-2 bg-emerald-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-emerald-600 transition-colors text-lg"
            >
              <FaShoppingCart className="w-6 h-6" />
              <span>Bazar</span>
              <span
                id="cart-item-count"
                className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-indigo-700"
              >
                {quantidadeCarrinho}
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
