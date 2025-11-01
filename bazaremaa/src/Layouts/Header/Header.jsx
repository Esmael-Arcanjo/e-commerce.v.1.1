// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom"; // ⬅️ Importa o Link para rotas

const Header = () => {
  return (
    <header className="bg-indigo-700 shadow-lg p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-white">
          Bazar-emaa
        </Link>

        <nav className="flex items-center space-x-6 text-white font-semibold">
          {/* Botão Entrar */}
          <Link
            to="/login"
            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-indigo-600 transition-colors text-base"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              ></path>
            </svg>
            <span>Entrar</span>
          </Link>

          {/* Botão Anúncios */}
          <Link
            to="/admin"
            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-indigo-600 transition-colors text-base"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 17v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm2-12h2a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2V7a2 2 0 012-2zm6 0h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V7a2 2 0 012-2z"
              ></path>
            </svg>
            <span>Dashboard</span>
          </Link>

          {/* Botão Carrinho */}
          <div className="relative">
            <Link
              to="/carrinho"
              className="relative flex items-center space-x-2 bg-emerald-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-emerald-600 transition-colors text-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13H5.4M7 13l-2.293 2.293c-.63.63-.182 1.942.525 2.544L11.5 20h2.5c.75 0 1.25-.5 1.25-1.25s-.5-.75-1.25-.75H11.5"
                ></path>
              </svg>
              <span>Bazar</span>
              <span
                id="cart-item-count"
                className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-indigo-700"
              >
                0
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
