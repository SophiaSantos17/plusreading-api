import { Router } from "express";
import bookController from "../controllers/bookController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";


const bookRouter = Router();

// rota para buscar todos os livros
bookRouter.get("/books", bookController.findAll);

// rota para pegar os livros com maior avaliação
bookRouter.get("/books/topGrade", bookController.findTopBooks);

// rota para pegar os livros mais recentes
bookRouter.get("/books/recents", bookController.findRecentBooks);

// rota para pesquisa
bookRouter.get('/search', bookController.searchBooks);

// rota para criar um novo livro
bookRouter.post("/books", authMiddleware, bookController.create);

// rota para pegar os livros pelo usuario
bookRouter.get("/books/:id", authMiddleware, bookController.findAllByUser);

export default bookRouter;