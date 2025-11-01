import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout principal do site
import LayoutBazar from "../Layouts/LayoutBazar";

// Páginas públicas
import Home from "../Pages/Home/Home";
import Carrinho from "../Pages/Carrinho/Carrinho";
import NotFound from "../Pages/NotFound/NotFound";

// Painel administrativo (rotas internas)
import AdminRoutes from "./AdminRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      {/* ROTAS PÚBLICAS COM O LAYOUT DO SITE */}
      <Route element={<LayoutBazar />}>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Route>

      {/* ROTAS ADMIN (SEM LAYOUT PÚBLICO) */}
      <Route path="/admin/*" element={<AdminRoutes />} />

      {/* PÁGINA 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
