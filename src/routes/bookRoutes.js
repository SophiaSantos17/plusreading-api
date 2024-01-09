import { Router } from "express";
import bookController from "../controllers/bookController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import multer from "multer";
import path from 'path';


const bookRouter = Router();

const storage = multer.diskStorage({
    destination: "./src/uploads",
    filename: function (req, file, cb) {
        const originalname = file.originalname; // Nome original do arquivo
        const extension = path.extname(originalname); // Extensão do arquivo

        // Crie um nome de arquivo único usando o nome original e a data atual
        const filename = originalname.replace(extension, '') + '-' + Date.now() + extension;

        cb(null, filename);
    }
})

const upload = multer({storage: storage});

// rota para buscar todos os livros
bookRouter.get("/books", bookController.findAll);

// rota para pegar os livros com maior avaliação
bookRouter.get("/books/topGrade", bookController.findTopBooks);

// rota para pegar os livros mais recentes
bookRouter.get("/books/recents", bookController.findRecentBooks);

// rota para pesquisa
bookRouter.get('/search', bookController.searchBooks);

// rota para criar um novo livro
bookRouter.post("/books", upload.single('bookImage'), authMiddleware, bookController.create);

// rota para pegar os livros pelo usuario
bookRouter.get("/books/:id", authMiddleware, bookController.findAllByUser);

export default bookRouter;