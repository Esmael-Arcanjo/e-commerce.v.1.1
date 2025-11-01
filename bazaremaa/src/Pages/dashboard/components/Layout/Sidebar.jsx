import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaChartLine,
  FaLayerGroup,
  FaCube,
  FaUserFriends,
  FaSignOutAlt,
  FaBoxOpen,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const sections = [
  {
    title: null,
    items: [
      { name: "Dashboard", icon: FaTachometerAlt },
      { name: "Analytics", icon: FaChartLine },
     
    ],
  },
    {
    title: "Produtos",
    items: [
      {
        name: "Produtos",
        icon: FaBoxOpen,
        subItems: [
          { name: "Todos Produtos" },
          { name: "Adicionar Produto" },
          { name: "Categorias" },
        ],
      },
    ],
  },
  {
    title: "Apps & Pages",
    items: [
      { name: "Apps", icon: FaLayerGroup },
      { name: "Widgets", icon: FaCube },
    ],
  },
  {
    title: "User Interface",
    items: [
      { name: "Features", icon: FaUserFriends },
      { name: "Card", icon: FaLayerGroup },
      { name: "Components", icon: FaCube },
    ],
  },
];

const Sidebar = ({ isOpen, setAuth }) => {
  const [active, setActive] = useState("Dashboard");
  const [expandedMenus, setExpandedMenus] = useState({});
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aqui você pode limpar tokens ou estado de login
    if (setAuth) setAuth(false); // exemplo: limpar estado de autenticação no App
    navigate("/login"); // redireciona para login
  };

  const toggleSubmenu = (name) => {
    setExpandedMenus((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const menuItemClass = (item) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition ${
      active === item
        ? "bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-200 font-semibold"
        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
    }`;

  return (
    <aside
      className={`fixed top-16 left-0 h-full bg-white dark:bg-gray-900 shadow-md border-r border-gray-200 dark:border-gray-800 transition-all duration-300 overflow-y-auto ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <nav className="px-2 space-y-6">
        {sections.map((section, idx) => (
          <div key={idx}>
            {isOpen && section.title && (
              <p className="text-xs uppercase text-gray-500 dark:text-gray-400 mb-2 font-semibold">
                {section.title}
              </p>
            )}
            {section.items.map((item) => {
              const Icon = item.icon;
              const hasSubItems = item.subItems && item.subItems.length > 0;
              const isExpanded = expandedMenus[item.name];

              return (
                <div key={item.name}>
                  <div
                    onClick={() => {
                      if (hasSubItems) toggleSubmenu(item.name);
                      else setActive(item.name);
                    }}
                    className={menuItemClass(item.name)}
                  >
                    {Icon && <Icon className="text-lg" />}
                    {isOpen && <span className="flex-1">{item.name}</span>}
                    {hasSubItems && isOpen && (
                      <span>{isExpanded ? <FaChevronUp /> : <FaChevronDown />}</span>
                    )}
                  </div>

                  {/* Submenus */}
                  {hasSubItems && isExpanded && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.subItems.map((sub) => (
                        <div
                          key={sub.name}
                          onClick={() => setActive(sub.name)}
                          className={`flex items-center gap-2 px-4 py-1 rounded-lg cursor-pointer transition ${
                            active === sub.name
                              ? "bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-200 font-semibold"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                          }`}
                        >
                          {isOpen && <span>{sub.name}</span>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}

        {/* Logout */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
          <div
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2 cursor-pointer text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition"
          >
            <FaSignOutAlt className="text-lg" />
            {isOpen && <span>Logout</span>}
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
