import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Ajuste para a URL do seu backend
  headers: {
    "Content-Type": "application/json",
    // Adicione token se necessário
    // Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// Usuários
export const getUserCount = () => API.get("/users/count");

// Produtos
export const getProductCount = () => API.get("/products/count");

// Vendas
export const getSalesSummary = () => API.get("/sales/summary");

// Top produtos
export const getTopProducts = () => API.get("/sales/top-products");
