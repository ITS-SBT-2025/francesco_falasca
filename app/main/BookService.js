const Book = require('../models/Book');

class BookService {
    static async getBookByID(IDlibro) {
        return await Book.get(IDlibro);
    }

    static async search(title = null, author = null) {
        return await Book.find(title, author);
    }

    static async create(title, author) {
        return await Book.create(title, author);
    }

    static async update(index, title, author) {
        return await Book.replace(index, title, author);
    }

    static async delete(index) {
        return await Book.delete(index);
    }
}

module.exports = BookService;