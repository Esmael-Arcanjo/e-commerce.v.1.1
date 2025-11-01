import express from "express";
import db from "../config/db.js";
import { verifyToken } from "../Middleware/authMiddleware.js";

const router = express.Router();

router.get("/users/count", verifyToken, async (req, res) => {
  const [rows] = await db.query("SELECT COUNT(*) AS count FROM users");
  res.json(rows[0]);
});

router.get("/products/count", verifyToken, async (req, res) => {
  const [rows] = await db.query("SELECT COUNT(*) AS count FROM products");
  res.json(rows[0]);
});

router.get("/sales/summary", verifyToken, async (req, res) => {
  const totalOrders = 45;
  const totalValue = 12400;
  const chartData = [
    { date: "20 Jan", vendas: 100, pedidos: 20 },
    { date: "22 Jan", vendas: 180, pedidos: 40 },
    { date: "23 Jan", vendas: 220, pedidos: 70 },
    { date: "24 Jan", vendas: 300, pedidos: 90 },
    { date: "25 Jan", vendas: 370, pedidos: 120 },
  ];
  res.json({ totalOrders, totalValue, chartData });
});

router.get("/sales/top-products", verifyToken, async (req, res) => {
  const data = [
    { nome: "Livros", quantidade: 35 },
    { nome: "Eletrônicos", quantidade: 65 },
    { nome: "Roupas", quantidade: 45 },
    { nome: "Acessórios", quantidade: 30 },
    { nome: "Outros", quantidade: 25 },
  ];
  res.json(data);
});

export default router;
