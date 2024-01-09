import bookServices from "../services/bookServices.js";

async function create(req, res){
    const body = req.body;
    const {_id: id} = res.locals.user;
    const file = req.file;

    try{
        const book = await bookServices.create(body, id, file);
        return res.status(201).send(book);
    }catch(err){
        res.status(409).send(err.message);
    }

}

async function findAll(req, res){
    try{
        const books = await bookServices.findAll();
        return res.status(201).send(books)
    }catch(err){
        res.status(500).send(err.message);
    }
}


async function findAllByUser(req, res){
    const {_id: id} = res.locals.user;

    try{
        const book = await bookServices.findAllByUser(id);
        return res.send(book);


    }catch(err){
        res.status(500).send(err.message);
    }
}

async function findTopBooks(req, res) {
    try {
        const topBooks = await bookServices.findTopBooks();
        return res.send(topBooks);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

async function findRecentBooks(req, res) {
    try {
        const recentBooks = await bookServices.findRecentBooks();
        return res.send(recentBooks);
    } catch (err) {
        res.status(500).send(err.message);
    }
}


async function searchBooks(req, res) {
    try {
        const { livro } = req.query;
        const books = await bookServices.searchBooks(livro);
        return res.send(books);
    } catch (err) {
        res.status(500).send(err.message);
    }
}



export default {create, findAll, findAllByUser, findTopBooks, findRecentBooks, searchBooks};