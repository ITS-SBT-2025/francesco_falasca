const bookController = require('bookController');

class Book {
    static cercaLibri(req, res) {
        let autore = req.params.autore;
        let titolo = req.query.titolo;
    
        if (req.params.autore) {
            autore = req.query.autore;
        }
    
        let parametri_di_ricerca = [];
    
        let dbquery = "select name,author from books";
    
        if (autore) {
            parametri_di_ricerca.push("author like '%" + autore + "%'");
        }
    
        if (titolo) {
            parametri_di_ricerca.push("title like '%" + titolo + "%'");
        }
    
        let queryfinale = dbquery;
    
        if (parametri_di_ricerca.length > 0) {
            queryfinale += " WHERE ";
            queryfinale += parametri_di_ricerca.join(" AND ");
        }
    
        res.send('Ecco la lista dei libri per la ricerca:' + queryfinale);
    }

    static getLibro(req, res) {
        if (req.params.idlibro) {
            res.send("Nome libro trovato:" + req.params.idlibro);
        } else {
            res.status(404);
            res.send("libro NON trovato");
        }
    }

    static ciao (req, res) {
        res.send('Quest è Ciao');
    }

    static getLibro2(req, res) {
        res.send("Qui non passo mai");
    }
    
    static async getBooks(req, res) {
        let autore = req.query.autore;
        let titolo = req.query.titolo;
        let data = await bookController.BooksAwait(autore,titolo );
        console.log("=======================");
        console.log(data);
        console.log("=======================");
        res.json(data);
    }
    
    static async creaLibro (req, res) {
        if (!req.body.autore || !req.body.titolo) {
            res.status(400).send("Errore: Devi specificare autore e titolo del libro");
            return;
        }
    
        let a = req.body.autore;
        let t = req.body.titolo;
        const data = await bookController.BooksAwait();
    
        data.push({ title: t, author: a });
        bookController.SaveBooks(data);
        res.send('Ho creato il tuo libro: ' + t + " scritto da " + req.body.autore);
    }
}

exports.book = Book;