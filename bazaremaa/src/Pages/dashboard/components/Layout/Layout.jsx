// src/components/Layout/Layout.jsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={darkMode ? "dark bg-gray-900 min-h-screen" : "bg-gray-50 min-h-screen"}>
      
      {/* Header com controle de menu e dark mode */}
      <Header toggleMenu={toggleMenu} darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="flex pt-16">
        
        {/* Sidebar com estado de abertura */}
        <Sidebar isOpen={menuOpen} />

        {/* Área de conteúdo */}
        <main
          className={`transition-all duration-300 flex-1 ${
            menuOpen ? "ml-64" : "ml-20"
          } p-6`}
        >
          {/* Aqui as rotas filhas serão renderizadas */}
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default Layout;
