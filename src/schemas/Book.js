import { Schema, model } from "mongoose";

const BooksSchema = new Schema({
    titulo: {type: String, required: true},
    autor: {type: String, required: true},
    genero: {type: String, required: true},
    type: {type: String, required: true},
    dataInicio: { type: Date, required: true },
    dataFim: { type: Date, required: true },
    grade: {type: Number, required: true},
    numPaginas: {type: Number, required: true},
    historiaLugar: {type: String, required: true},
    personagensPrincipais: {type: String, required: true},
    personagensFavoritos: {type: String, required: true},
    adaptacao: {type: String, required: true},
    opiniaoUser: {type: String, required: true},
    // imgBook: {type: String, required: true},
    userId: {type: Schema.Types.ObjectId, required: true, ref: "users"},
    cratedAt: {type: Date, default: Date.now()}
});

export default model("books", BooksSchema);
