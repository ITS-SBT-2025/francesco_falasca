const BookController = require('../controllers/BookController');

function setRoutes(app) {
    app.get('/', function (req, res) {
        res.send('Hello Welcome to my library');
    });

    function test(req, res, next) {
        console.log('testing middleware');
        next();
    }
    app.get('/books', BookController.searchBooks);
    app.post('/books', BookController.createBook);
    app.get('/books/:idlibro', test, BookController.getBook);
    app.get('/books/:idlibro', BookController.updateBook);
    app.get('/books', BookController.deleteBook);
}

module.exports = routes;