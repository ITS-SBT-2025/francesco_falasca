const book = require('book');

function setRoutes(app) {
    app.get('/', function (req, res) {
        res.send('Hello World')
    });
    app.get('/books/:autore', book.cercaLibri);
    app.get('/books/:idlibro', book.getLibro);
    app.get('/books/ciao', book.ciao);
    app.get('/books/:idlibro', book.getLibro2);
    app.get('/books', book.getBooks);
    app.post('/books', book.creaLibro);
}

exports.router = setRoutes;