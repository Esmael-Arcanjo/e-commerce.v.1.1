import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  // Carrega o carrinho salvo ao abrir o app
  useEffect(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem("carrinho")) || [];
    setCarrinho(carrinhoSalvo);
  }, []);

  // Atualiza o localStorage sempre que o carrinho mudar
  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }, [carrinho]);

  // Adicionar produto
  const adicionarAoCarrinho = (produto) => {
    const existe = carrinho.find((p) => p.id === produto.id);
    if (!existe) {
      setCarrinho([...carrinho, produto]);
    } else {
      alert("⚠️ Este produto já está no carrinho!");
    }
  };

  // Remover produto
  const removerDoCarrinho = (id) => {
    const atualizado = carrinho.filter((p) => p.id !== id);
    setCarrinho(atualizado);
  };

  // Limpar carrinho
  const limparCarrinho = () => {
    setCarrinho([]);
  };

  return (
    <CartContext.Provider
      value={{ carrinho, adicionarAoCarrinho, removerDoCarrinho, limparCarrinho }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCarrinho = () => useContext(CartContext);
