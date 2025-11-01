import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Estado compartilhado do perfil
  const [profile, setProfile] = useState({
    nome: "John Doe",
    foto: "https://i.pravatar.cc/80",
    cargo: "Administrador",
    email: "grupoemaa@gmail.com",
  });

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={darkMode ? "dark bg-gray-900 min-h-screen" : "bg-gray-50 min-h-screen"}>
      <Header
        toggleMenu={toggleMenu}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        profile={profile}
      />
      <div className="flex pt-16">
        <Sidebar isOpen={menuOpen} profile={profile} />
        <main className={`transition-all duration-300 flex-1 ${menuOpen ? "ml-64" : "ml-20"} p-6`}>
          <Outlet context={{ profile, setProfile }} /> {/* passa via Outlet */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
