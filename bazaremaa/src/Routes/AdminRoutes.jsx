// src/routes/AdminRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// =========================
// Layout e páginas principais do painel
// =========================
import Layout from "../Pages/dashboard/components/Layout/Layout";
import Dashboard from "../Pages/dashboard/Dashboard";
import Profile from "../Pages/dashboard/components/Profile";
import Login from "../Pages/Log/Login";

// =========================
// Proteção de rotas
// =========================
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "../components/ProtectedRoute";

// =========================
// Páginas administrativas adicionais
// =========================
import AddProduct from "../Pages/dashboard/AddProduct";
// import EditProduct from "../Pages/EditProduct";
// import AdminDashboard from "../Pages/AdminDashboard";

const AdminRoutes = () => {
  return (
    <Routes>
      {/* =========================
          LOGIN ADMIN – acesso público
         ========================= */}
      <Route path="/login" element={<Login />} />

      {/* =========================
          ROTAS ADMIN – protegidas pelo layout e login
         ========================= */}
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <Layout /> {/* Layout com Sidebar + Outlet */}
          </PrivateRoute>
        }
      >
        {/* Dashboard principal */}
        <Route index element={<Dashboard />} />

        {/* Perfil do administrador */}
        <Route path="perfil" element={<Profile />} />

        {/* Adicionar produto */}
        <Route
          path="add"
          element={
            <ProtectedRoute>
              <AddProduct />
            </ProtectedRoute>
          }
        />

        {/* Editar produto */}
        {/* <Route
          path="edit/:id"
          element={
            <ProtectedRoute>
              <EditProduct />
            </ProtectedRoute>
          }
        /> */}

        {/* Outras rotas administrativas podem ser adicionadas aqui */}
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
