import express from "express";
import multer from "multer";
import Product from "../Models/models_Product.js";
import { verifyToken } from "../Middleware/authMiddleware.js";

const router = express.Router();

// 📁 Configuração do multer (upload de imagens)
const storage = multer.diskStorage({
  destination: "img/uploads",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

/* ==============================================================
   🟢 LISTAR PRODUTOS (público)
   ==============================================================
*/
router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    console.error("Erro ao listar produtos:", err);
    res.status(500).json({ error: "Erro ao listar produtos" });
  }
});

/* ==============================================================
   🟡 CRIAR PRODUTO (admin ou vendedor)
   ==============================================================
*/
router.post("/", verifyToken, upload.single("image"), async (req, res) => {
  try {
    const { title, price, nome, vendedor, pais, cidade, avaliacao } = req.body;

    // Exemplo: restrição para admin, se quiser liberar pra usuários, comente esta linha
    if (req.user.role !== "admin") {
      return res.status(403).json({ error: "Acesso negado" });
    }

    const image = req.file ? req.file.filename : null;

    const product = await Product.create({
      title,
      price,
      nome,
      vendedor,
      pais,
      cidade,
      avaliacao,
      image,
    });

    res.json(product);
  } catch (err) {
    console.error("Erro ao criar produto:", err);
    res.status(500).json({ error: "Erro ao criar produto" });
  }
});

/* ==============================================================
   🔵 ATUALIZAR PRODUTO (admin)
   ==============================================================
*/
router.put("/:id", verifyToken, upload.single("image"), async (req, res) => {
  try {
    if (req.user.role !== "admin")
      return res.status(403).json({ error: "Acesso negado" });

    const { title, price, nome, vendedor, pais, cidade, avaliacao } = req.body;
    const image = req.file ? req.file.filename : undefined;

    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: "Produto não encontrado" });

    await product.update({
      title: title || product.title,
      price: price || product.price,
      nome: nome || product.nome,
      vendedor: vendedor || product.vendedor,
      pais: pais || product.pais,
      cidade: cidade || product.cidade,
      avaliacao: avaliacao || product.avaliacao,
      image: image || product.image,
    });

    res.json(product);
  } catch (err) {
    console.error("Erro ao atualizar produto:", err);
    res.status(500).json({ error: "Erro ao atualizar produto" });
  }
});

/* ==============================================================
   🔴 DELETAR PRODUTO (admin)
   ==============================================================
*/
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    if (req.user.role !== "admin")
      return res.status(403).json({ error: "Acesso negado" });

    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: "Produto não encontrado" });

    await product.destroy();
    res.json({ message: "Produto removido com sucesso" });
  } catch (err) {
    console.error("Erro ao deletar produto:", err);
    res.status(500).json({ error: "Erro ao deletar produto" });
  }
});

export default router;
