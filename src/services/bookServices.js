import authRepository from "../repositories/authRepository.js";
import bookRepository from "../repositories/bookRepository.js";

async function create(body, id, file){
    try{
        if(!id) throw new Error("Id do usuário é obrigatório");

        // Adicione o campo bookImage ao criar o livro apenas se a imagem estiver presente
        const bookImage = file ? `./uploads/${file.filename}` : null;

        // criando o livro com todos os dados
        const book = {...body, userId: id, bookImage};

        // tenta criar o livro no banco de dados
        const createdBook = await bookRepository.create(book);

        // retorn tudo
        return createdBook;


    }catch (error) {
        // Lide com erros específicos, se necessário
        throw error;
    }

}

async function findAll(){
    return await bookRepository.findAll()
}

async function findAllByUser(id){
    if(!id) throw new Error("Id do usuário é obrigatório");
    return await bookRepository.findAllByUser(id);
}

async function findTopBooks() {
    return await bookRepository.findTopBooks();
}

async function findRecentBooks() {
    return await bookRepository.findRecentBooks();
}

async function searchBooks(livro) {
    return await bookRepository.searchBooks(livro);
}


export default {create, findAll, findAllByUser, findTopBooks, findRecentBooks, searchBooks}
