const BookService = require('../main/BookService');

class BookController {
    static async searchBooks(req, res) {
        let title = null;
        let author = null;

        if (req.query && req.query.title) {
            title = req.query.title;
        }

        if (req.query && req.query.author) {
            author = req.query.author;
        }

        let data = await BookService.search(title, author);
        res.json(data);
    }

    static async createBook(req, res) {
        if (!req.body || !req.body.title || !req.body.author) {
            res.status(400).send('Errore: Devi specificare autore e titolo del libro');
            return;
        }

        let t = req.body.title;
        let a = req.body.author;

        const data = await BookService.create(t, a);

        if (!data) {
            res.status(500).send('Errore durante la creazione del libro');
            return;
        }

        res.json(data);
    }

    static async getBook(req, res) {
        if (req.params && req.params.IDlibro) {
            const newBook = await BookService.getBookByID(req.paramsIDlibro);

            if (!newBook) {
                res.status(404);
                res.send('Libro non trovato');
                return;
            }

            res.json(newBook);
        } else {
            res.status(400);
            res.send("Bad Request: Devi specificare l''ID del libro");
        }
    }

    static async updateBook(req, res) {
        if (req.params && req.params.IDlibro && req.body && req.body.title && req.body.author) {
            const newBook = await BookService.update(req.params.IDlibro, req.body.title, req.body.author);

            if (!newBook) {
                res.status(404);
                res.send('Libro non trovato');
                return;
            }

            res.json(newBook);
        } else {
            res.status(400);
            res.send(`Bad Request: Devi specificare l'ID ${req.params.IDlibro} del libro, il nuovo titolo ${req.body.title} e l'autore ${req.body.author}`);
        }

    }

    static async deleteBook(req, res) {
        if (req.params && req.params.IDlibro) {
            const newBook = await BookService.delete(req.params.IDlibro);
            if (!newBook) {
                res.status(404);
                res.send('Libro non trovato');
                return;
            }
            res.send('Libro cancellato');
        } else {
            res.status(400);
            res.send("Bad Request: Devi specificare l'ID del libro");
        }
    }
}

module.exports = BookController;