import React, { useState } from "react";
import {
  FaSearch,
  FaBell,
  FaEnvelope,
  FaCalendarAlt,
  FaCog,
  FaUserCircle,
  FaBars,
  FaSun,
  FaMoon,
} from "react-icons/fa";

const Header = ({ toggleMenu, darkMode, setDarkMode }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-sm z-50 flex items-center justify-between px-6 py-3">
      {/* Botão Menu + Logo */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <FaBars className="text-gray-700 dark:text-gray-200 text-lg" />
        </button>
        <div className="flex items-center gap-2">
          <img src="/src/assets/img/logo/logobazar.png" alt="Logo" className="w-8 h-8 object-contain" />
          <h1 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100">
           Painel Administrativo GrupoEmaa
          </h1>
        </div>
      </div>

      {/* Barra de busca */}
      <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 w-72">
        <FaSearch className="text-gray-500 dark:text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-sm text-gray-700 dark:text-gray-200 w-full"
        />
      </div>

      {/* Ícones + Perfil */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? (
            <FaSun className="text-yellow-400 text-lg" />
          ) : (
            <FaMoon className="text-gray-600 dark:text-gray-300 text-lg" />
          )}
        </button>

        <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          <FaEnvelope className="text-gray-600 dark:text-gray-300 text-lg" />
        </button>

        <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          <FaCalendarAlt className="text-gray-600 dark:text-gray-300 text-lg" />
        </button>

        <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          <FaBell className="text-gray-600 dark:text-gray-300 text-lg" />
        </button>

        <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          <FaCog className="text-gray-600 dark:text-gray-300 text-lg" />
        </button>

        {/* Perfil */}
        <div className="relative flex items-center gap-3 pl-3 border-l border-gray-300 dark:border-gray-700">
          <FaUserCircle className="text-3xl text-gray-500 dark:text-gray-300 cursor-pointer" />
          <div className="hidden md:flex flex-col">
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
              John Doe
            </span>
            <span className="text-xs text-green-500 font-semibold">● Online</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
