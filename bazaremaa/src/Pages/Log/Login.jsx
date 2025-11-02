import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api"; // Instância centralizada

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Faz a requisição usando a instância central
      const res = await api.post("/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);
      setMsg("Login realizado com sucesso!");

      // Redireciona conforme a role retornada pelo backend
      if (res.data.role === "admin") {
        navigate("/admin"); // Painel do admin
      } else if (res.data.role === "seller") {
        navigate("/anunciar-form"); // Formulário de quem vai vender
      } else {
        navigate("/"); // Usuário comum vai para a home
      }

    } catch (err) {
      // Exibe a mensagem de erro do backend ou mensagem genérica
      setMsg(err.response?.data?.error || "Erro ao fazer login");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl text-gray-600 hover:text-gray-800"
            >
              {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
            </button>
          </div>

          <button
            type="submit"
            className="bg-indigo-700  text-white py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Entrar
          </button>
        </form>
        {msg && <p className="mt-4 text-center text-red-500">{msg}</p>}
        <div className="mt-4 text-center text-sm">
          <Link to="/forgot-password" className="text-blue-500 hover:underline mr-4">
            Esqueceu a senha?
          </Link>
          <Link to="/register" className="text-blue-500 hover:underline">
            Criar conta
          </Link>
        </div>
      </div>
    </div>
  );
}
