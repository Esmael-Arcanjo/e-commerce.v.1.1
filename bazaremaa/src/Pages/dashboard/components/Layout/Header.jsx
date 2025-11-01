import React, { useState } from "react";
import { FaSearch, FaBell, FaEnvelope, FaCalendarAlt, FaCog, FaUserCircle, FaBars, FaSun, FaMoon, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = ({ toggleMenu, darkMode, setDarkMode, profile }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

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
          <img
            src="/src/assets/img/logo/logobazar.png"
            alt="Logo"
            className="w-8 h-8 object-contain"
          />
          <h1 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100">
            Painel Administrativo
          </h1>
        </div>
      </div>

      {/* Barra de busca */}
      <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 w-72">
        <FaSearch className="text-gray-500 dark:text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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

        <div className="relative">
          <button
            onClick={() => setShowMessages(!showMessages)}
            className="p-2 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <FaEnvelope className="text-gray-600 dark:text-gray-300 text-lg" />
          </button>
          {showMessages && (
            <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-3 z-50">
              <p className="text-sm text-gray-700 dark:text-gray-200">
                Nenhuma nova mensagem
              </p>
            </div>
          )}
        </div>

        <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          <FaCalendarAlt className="text-gray-600 dark:text-gray-300 text-lg" />
        </button>

        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <FaBell className="text-gray-600 dark:text-gray-300 text-lg" />
          </button>
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-3 z-50">
              <p className="text-sm text-gray-700 dark:text-gray-200">
                Nenhuma nova notificação
              </p>
            </div>
          )}
        </div>

        {/* Perfil */}
        <div className="relative">
          <div
            className="flex items-center gap-3 pl-3 border-l border-gray-300 dark:border-gray-700 cursor-pointer"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <img src={profile.foto} alt="Avatar" className="w-10 h-10 rounded-full" />
            <div className="hidden md:flex flex-col">
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {profile.nome}
              </span>
              <span className="text-xs text-green-500 font-semibold">● Online</span>
            </div>
          </div>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 z-50">
              <button
                onClick={() => {
                  navigate("/admin/perfil");
                  setShowProfileMenu(false);
                }}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
              >
                <FaUserCircle /> Ver perfil
              </button>

              <button
                onClick={() => {
                  navigate("/admin/configuracoes");
                  setShowProfileMenu(false);
                }}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
              >
                <FaCog /> Configurações
              </button>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-gray-700 w-full text-left"
              >
                <FaSignOutAlt /> Sair
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
