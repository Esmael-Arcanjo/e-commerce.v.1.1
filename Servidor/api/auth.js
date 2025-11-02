// routes/auth.js
import express from "express";
import { verifyToken } from "../middlewares/auth.js"; // middleware que valida o JWT

const router = express.Router();

router.get("/me", verifyToken, async (req, res) => {
  try {
    // o middleware "verifyToken" coloca os dados do usuário em req.user
    res.json(req.user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar usuário autenticado" });
  }
});

export default router;
