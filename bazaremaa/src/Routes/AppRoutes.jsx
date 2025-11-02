import React from "react";
import { Routes, Route } from "react-router-dom";

// =========================
// Layout principal
// =========================
import LayoutBazar from "../Layouts/LayoutBazar";

// =========================
// Páginas públicas
// =========================
import Home from "../Pages/Home/Home";
import Login from "../Pages/Log/Login";
import Register from "../Pages/Log/Register";
import Carrinho from "../Pages/Compras/Carrinho";
import Comprar from "../Pages/Compras/Comprar";
import Produtos from "../Pages/Produtos/Produtos"
import Anunciar from "../Pages/Anunciar/Anunciar";
import NotFound from "../Pages/NotFound/NotFound";

// =========================
// Rotas administrativas
// =========================
import AdminRoutes from "./AdminRoutes";
import ScrollToTop from "../components/ScrollToTop.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      {/* =========================
          ROTAS PÚBLICAS COM LAYOUT
         ========================= */}
      <Route element={<LayoutBazar />}>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} /> {/* ✅ AGORA TEM LAYOUT */}
      </Route>

      {/* =========================
          ROTAS PÚBLICAS SEM LAYOUT
         ========================= */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/comprar" element={<Comprar />} />
      <Route path="/anunciar" element={<Anunciar />} />
      {/* =========================
          ROTAS ADMINISTRATIVAS
         ========================= */}
      <Route path="/admin/*" element={<AdminRoutes />} />

       
<Route path="/ScrollToTop " element={<ScrollToTop /> } />
      {/* =========================
          PÁGINA 404
         ========================= */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
