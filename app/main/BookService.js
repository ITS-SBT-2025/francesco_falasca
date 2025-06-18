const Book = require('../models/Book');

class BookService {
    static async getBookByID(idlibro) {
        return await Book.get(idlibro);
    }

    static async search(autore = null, titolo = null) {
        return await Book.find(autore, titolo);
    }

    static async create(autore, titolo) {
        return await Book.create(autore, titolo);
    }

    static async update(index, autore, titolo) {
        return await Book.replace(index, autore, titolo);
    }

    static async delete(index) {
        return await Book.delete(index);
    }
}

module.export = BookService;