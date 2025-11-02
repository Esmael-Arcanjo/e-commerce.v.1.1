import axios from "axios";

// Criação da instância do Axios
const api = axios.create({
  baseURL: "http://localhost:5000/api", // URL do backend
  timeout: 5000,                        // Timeout padrão
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor de requisição: exemplo para adicionar token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // ou do context/auth
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor de resposta: exemplo de tratamento de erro global
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Aqui você pode tratar erros globalmente
      console.error("Erro na API:", error.response.status, error.response.data);
      if (error.response.status === 401) {
        // logout ou redirecionamento para login
      }
    }
    return Promise.reject(error);
  }
);

export default api;
