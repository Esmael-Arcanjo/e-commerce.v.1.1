import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/db.js";
import routes from "./Routes/Index.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());



app.use("/api", routes);

sequelize.sync().then(() => {
  console.log("Banco conectado!");
});

app.listen(process.env.PORT, () =>
  console.log(`Servidor rodando na porta ${process.env.PORT}`)
);