import api from "./api";

// Busca total de usuários
export const getUserCount = () => api.get("/dashboard/users");

// Busca total de produtos
export const getProductCount = () => api.get("/dashboard/products");

// Busca resumo de vendas (valor total, pedidos pendentes etc.)
export const getSalesSummary = () => api.get("/dashboard/sales-summary");

// Busca produtos mais vendidos
export const getTopProducts = () => api.get("/dashboard/top-products");
