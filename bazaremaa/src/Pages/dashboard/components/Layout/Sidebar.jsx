import React, { useState } from "react";
import { FaTachometerAlt, FaChartLine, FaShoppingCart, FaLayerGroup, FaCube, FaFileAlt, FaUserFriends, FaSignOutAlt, FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, profile }) => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const menus = [
    { title: "Dashboard", icon: <FaTachometerAlt />, path: "/admin" },
    { title: "Estatísticas", icon: <FaChartLine />, submenus: ["Relatórios", "Análises", "Indicadores"] },
    { title: "Vendas", icon: <FaShoppingCart />, submenus: ["Pedidos", "Clientes", "Transações"] },
    { title: "Produtos", icon: <FaCube />, submenus: ["Lista de Produtos", "Categorias", "Estoque"] },
    { title: "Projetos", icon: <FaLayerGroup />, submenus: ["Ativos", "Concluídos", "Planejados"] },
    { title: "Documentos", icon: <FaFileAlt />, submenus: ["Notas", "Faturas", "Relatórios"] },
    { title: "Usuários", icon: <FaUserFriends />, submenus: ["Lista de Usuários", "Funções", "Permissões"] },
  ];

  return (
    <aside
      className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 shadow-sm p-4 overflow-y-auto transition-all duration-300
        ${isOpen ? "w-64" : "w-20"}
      `}
    >
      {/* Perfil */}
      {isOpen && (
        <div
          className="flex flex-col items-center mb-6 cursor-pointer hover:opacity-80 transition"
          onClick={() => navigate("/admin/perfil")}
        >
          <img src={profile.foto} alt="Avatar" className="w-16 h-16 rounded-full mb-2 border border-gray-300" />
          <h2 className="text-gray-800 font-semibold">{profile.nome}</h2>
          <p className="text-gray-500 text-sm">{profile.email}</p>
        </div>
      )}

      {/* Menu */}
      <nav>
        <ul className="space-y-1">
          {menus.map((menu, i) => (
            <li key={i}>
              <button
                onClick={() =>
                  menu.submenus
                    ? setOpenMenu(openMenu === i ? null : i)
                    : navigate(menu.path)
                }
                className={`flex items-center justify-between w-full text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md transition ${
                  openMenu === i ? "bg-gray-100" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-gray-600 text-lg">{menu.icon}</span>
                  {isOpen && <span className="text-sm font-medium">{menu.title}</span>}
                </div>
                {menu.submenus && isOpen && (
                  <FaChevronDown
                    className={`text-xs transition-transform ${openMenu === i ? "rotate-180" : ""}`}
                  />
                )}
              </button>

              {/* Submenus */}
              {menu.submenus && openMenu === i && isOpen && (
                <ul className="ml-8 mt-1 space-y-1 border-l border-gray-200 pl-3">
                  {menu.submenus.map((sub, idx) => (
                    <li
                      key={idx}
                      className="text-gray-600 text-sm py-1.5 px-2 rounded hover:bg-gray-100 cursor-pointer transition"
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      {isOpen && (
        <button
          onClick={handleLogout}
          className="mt-8 flex items-center gap-3 text-red-600 font-medium hover:bg-red-50 w-full px-3 py-2 rounded-md transition"
        >
          <FaSignOutAlt />
          Sair
        </button>
      )}
    </aside>
  );
};

export default Sidebar;
