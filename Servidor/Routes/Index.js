import express from "express";

import authRoutes from "./authRoutes.js"; // importa o arquivo que criamos
import productRoutes from "./routes_products.js";
import dashboardRoutes from "./dashboardRoutes.js";



const router = express.Router();

router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/", dashboardRoutes);

export default router;



