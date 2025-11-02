import React, { useEffect } from "react";
import Galeria from "./Galeria.jsx";

const Produtos = () => {
  // Faz scroll suave para o topo ao montar o componente
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Todos os Produtos
      </h1>
      <Galeria /> {/* Galeria completa */}
    </div>
  );
};

export default Produtos;


