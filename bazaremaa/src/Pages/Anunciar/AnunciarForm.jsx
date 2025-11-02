import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";
import "./AnunciarForm.css";

const AnunciarProduto = () => {
  const { user } = useAuth();
  const [form, setForm] = useState({
    title: "",
    price: "",
    nome: "",
    vendedor: "",
    pais: "",
    cidade: "",
    avaliacao: 0,
  });
  const [image, setImage] = useState(null);
  const [mensagem, setMensagem] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setMensagem("⚠️ Você precisa estar logado para anunciar.");
      return;
    }

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));
    if (image) formData.append("image", image);

    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:5000/api/products", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setMensagem("✅ Produto anunciado com sucesso!");
      setForm({
        title: "",
        price: "",
        nome: "",
        vendedor: "",
        pais: "",
        cidade: "",
        avaliacao: 0,
      });
      setImage(null);
    } catch (err) {
      console.error(err);
      setMensagem("❌ Erro ao anunciar produto.");
    }
  };

  return (
    <div className="anunciar-container">
      <h2>Anunciar Produto</h2>
      {mensagem && <p className="mensagem">{mensagem}</p>}

      <form onSubmit={handleSubmit} className="anunciar-form">
        <div className="linha">
          <div className="campo">
            <label>Título:</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="campo">
            <label>Preço (R$):</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="linha">
          <div className="campo">
            <label>Nome do Produto:</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="campo">
            <label>Vendedor:</label>
            <input
              type="text"
              name="vendedor"
              value={form.vendedor}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="linha">
          <div className="campo">
            <label>País:</label>
            <input
              type="text"
              name="pais"
              value={form.pais}
              onChange={handleChange}
              placeholder="Brasil"
              required
            />
          </div>

          <div className="campo">
            <label>Cidade:</label>
            <input
              type="text"
              name="cidade"
              value={form.cidade}
              onChange={handleChange}
              required
            />
          </div>

          <div className="campo">
            <label>Avaliação:</label>
            <input
              type="number"
              name="avaliacao"
              value={form.avaliacao}
              onChange={handleChange}
              step="0.1"
              min="0"
              max="5"
            />
          </div>
        </div>

        <div className="linha">
          <div className="campo">
            <label>Imagem do Produto:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
        </div>

        <div className="botao-container">
          <button type="submit">📢 Publicar Anúncio</button>
        </div>
      </form>
    </div>
  );
};

export default AnunciarProduto;
