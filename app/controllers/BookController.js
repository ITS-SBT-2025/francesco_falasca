const fs = require('fs').promises;
const path = require('path');

class BookController {
    BooksSync(a,t) {
        const data = [];
    
        try {
            let content = fs.readFileSync(path.join(__dirname, 'data/books.dat'), 'utf8');
            console.log(content);
            content.split("\n").forEach((line) => {
                const [title, author] = line.split(";");
    
                if (title && author) {
                    console.log(`Nome: ${title}, Autore: ${author}`);
                    data.push({ title, author });
                }
            });
        } catch (err) {
            console.error(err);
        }
    
        return data;
    }

    BooksAsync(a,t) {
        const data = [];
    
        try {
             fs.readFile(path.join(__dirname, 'data/books.dat'), (err, content) => {
                if (err) {
                    console.error(err);
                    return;
                }
    
                console.log(content);
                // content.split("\n").forEach((line) => {
                // const [title, author] = line.split(";");
                // if (title && author) {
                //     console.log(`Nome: ${title}, Autore: ${author}`);
                //     data.push({ title, author });
                // }
           
                console.log("ABBIAMO LETTO IL FILE");
            });
    
            console.log("DOPO LA LETTURA");
        } catch (err) {
            console.error(err);
        }
    
        return data;
    }
    
    async BooksAwait(a,t) {
        const data = [];
    
        try {
            let content = await fs.readFile(path.join(__dirname, 'data/books.dat'), 'utf8');
            console.log(content.toString());
            content.toString().split("\n").forEach((line) => {
                const [title, author] = line.split(";");
    
                if (title && author) {
                    console.log(`Nome: ${title}, Autore: ${author}`);
                    data.push({ title, author });
                }
            });
        } catch (err) {
            console.error(err);
        }
    
        return data;
    }
    
    async SaveBooks(data) {
        try {
            let content = "";
    
            data.forEach( (item) => {
                content += `${item.title};${item.author}\n`;
            });
            
            await fs.writeFile(path.join(__dirname, 'data/books.dat'), content, 'utf8');
    
        } catch (err) {
            console.error(err);
        }
    }
}

exports.bookController = BookController;