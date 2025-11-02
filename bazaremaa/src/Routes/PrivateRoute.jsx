// src/routes/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // Pega o token do localStorage
  const token = localStorage.getItem("token");

  // Se tiver token, deixa acessar a rota, senão redireciona para login
  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
