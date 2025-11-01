import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMsg("As senhas não coincidem!");
      return;
    }

    try {
      // Enviando role como 'user' por padrão
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        email,
        password,
        role: "user"
      });

      setMsg(res.data.message);
      // Redireciona para login após registro
      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (err) {
      setMsg(err.response?.data?.error || "Erro ao registrar usuário");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Registrar</h2>
        <form onSubmit={handleRegister} className="flex flex-col">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Confirme a senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors"
          >
            Registrar
          </button>
        </form>
        {msg && <p className="mt-4 text-center text-red-500">{msg}</p>}
      </div>
    </div>
  );
}
