import bookRepository from "../repositories/bookRepository.js";

async function create(body, id){
    if(!id) throw new Error("Id do usuário é obrigatório");
    return await bookRepository.create({...body, userId: id});
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
