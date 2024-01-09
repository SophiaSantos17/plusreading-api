import BooksSchema from "../schemas/Book.js"

async function create(data){
    return BooksSchema.create(data);
}

async function findAll(){
    return BooksSchema.find();
}

async function findAllByUser(id){
    return BooksSchema.find({ userId: id });
}

async function findTopBooks() {
    return BooksSchema.find({})
        .sort({ grade: -1 }) // ordena por grade em ordem decrescente
        .limit(3); // ou qualquer número desejado
}

async function findRecentBooks() {
    return BooksSchema.find({})
        .sort({ cratedAt: -1 }) // ordena por cratedAt em ordem decrescente
        .limit(5);
}

async function searchBooks(livro) {
    return BooksSchema.find({ titulo: { $regex: livro || '', $options: 'i' } });
}


export default {create, findAll, findAllByUser, findTopBooks, findRecentBooks, searchBooks};