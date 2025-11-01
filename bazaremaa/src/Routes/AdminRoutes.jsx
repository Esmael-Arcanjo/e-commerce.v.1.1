// src/Routes/AdminRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/dashboard/Dashboard";




const AdminRoutes = () => {
  return (
    <Routes>
      {/* Página principal do painel admin */}
      <Route path="/" element={<Dashboard />} />
      {/* Outras rotas futuras do admin */}
      {/* <Route path="users" element={<Users />} /> */}
      {/* <Route path="products" element={<Products />} /> */}

        
       
    </Routes>
  );
};

export default AdminRoutes;
