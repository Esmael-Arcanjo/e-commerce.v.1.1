import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Anunciar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // Se não estiver logado, vai para login
      navigate("/login?redirect=anunciar");
    } else if (user?.role === "admin") {
      // Se for admin, vai direto para dashboard
      navigate("/admin");
    }
    // Se for usuário normal, permanece na página para formulário
  }, [user, navigate]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      {user && user.role !== "admin" && (
        <>
          <h1 className="text-2xl font-bold mb-4">Anunciar Produto</h1>
          {/* Aqui vai o formulário */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nome do produto"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Categoria"
              className="w-full p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Preço"
              className="w-full p-2 border rounded"
            />
            <button className="px-6 py-2 bg-yellow-500 text-gray-900 font-bold rounded hover:bg-yellow-600 transition-colors">
              Publicar Produto
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Anunciar;
