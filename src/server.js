import "dotenv/config";
import { json } from "express";
import { connectDB } from "./config/database.js";
import cors from "cors";
import express from "express";
import authRouter from "./routes/authRoutes.js";
import bookRouter from "./routes/bookRoutes.js";

const app = express();

// Conectar ao banco de dados
connectDB();

// Middleware para permitir solicitações de diferentes origens
app.use(cors());

// Middleware para analisar o corpo da requisição como JSON
app.use(json());

// Rotas
app.use(authRouter);
app.use(bookRouter);

// Iniciar o servidor
app.listen(process.env.PORT, () => console.log(`Servidor rodando na porta ${process.env.PORT}`));
