const BookController = require('../controllers/BookController');

app.get('/', function (req, res) {
    res.send('Hello World')
});
app.get('/books', BookController.searchBooks);
app.post('/books', BookController.createBook);
app.get('/books/:idlibro', test, BookController.getBook);
app.post('/books/:idlibro', BookController.updateBook);
app.delete('/books/:idlibro', BookController.deleteBook);
app.get('/testsession', BookController.testsession);

module.exports = router;