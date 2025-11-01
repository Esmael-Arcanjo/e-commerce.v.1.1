import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Pages/dashboard/components/Layout/Layout";
import Dashboard from "../Pages/dashboard/Dashboard";

import Profile from "../Pages/dashboard/components/Profile";

const AdminRoutes = () => {
  return (
    <Routes>
      {/* Layout envolve todas as rotas do admin */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        {/* Outras rotas filhas */}
        {/* <Route path="users" element={<Users />} /> */}
        <Route path="/perfil" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;



