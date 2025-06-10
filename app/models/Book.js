const fs = require('fs').promises;
const path = require('path');

class Book {
    static async load() {
        const data = { content: [], maxID: 0 };
        try {
            let content = await fs.readFile(path.join(__dirname, 'data.txt'), 'utf8');
            console.log(content.toString());
            content.toString().split('\n').forEach(line => {
                const [index, title, author] = line.split(';');
                if (index) {
                    console.log(`index: ${index}, Nome: ${title}, Autore: ${author}`);
                    data.content.push({ index, title, author });

                    if (parseInt(index) > data.maxID) {
                        data.maxID = parseInt(index);
                    }
                }
            });
        } catch (err) {
            console.error(err);
        }

        console.log(`Caricamento completato: ${data}`);
        return data;
    }

    static async save(data) {
        try {
            let content = '';
    
            data.content.forEach(item => {
                content += `${item.index};${item.author};${item.author}\n`;
            });
            
            await fs.writeFile(path.join(__dirname, 'data.txt'), content, 'utf8');
    
        } catch (err) {
            console.error(err);
        }
    }

    static async create(a, t) {
        try {
            const data = await Book.load();
            data.maxID++;
            let newBook = { index: data.maxID, title: t, author: a };
            data.content.push(newBook);
            await Book.save(data);
            return newBook;
        } catch (err) {
            console.error(err);
            return null;
        }
    }

    static async get(index) {
        let result = null;

        try {
            const data = await Book.load();
            data.content.forEach(item => {
                if (item.index === index) {
                    result = item;
                }
            });
        } catch (err) {
            console.error(err);
        }

        return result;
    }

    static async replace(index, a, t) {
        let result = null;

        try {
            const data = await Book.load();
            let newBook = { index: index, title: t, author: a };
            data.content.forEach(item => {
                if (item.index === index) {
                    item.index = index;
                    item.title = t;
                    item.author = a;
                    result = item;
                }
            });

            await Book.save();
        } catch (err) {
            console.error(err);
        }

        return result;
    }

    static async delete(index) {
        let result = { content: [], maxID: 0 };

        try {
            const data = await Book.load();
            data.content.forEach(item => {
                console.log(`Controllo: ${item.index} != ${index}`);

                if (item.index != index) {
                    result.content.push(item);
                }
            });

            await Book.save(result);
        } catch (err) {
            console.error(err);
            return false;
        }

        return true;
    }

    static async find(title = null, author = null) {
        let result = [];

        try {
            const data = await Book.load();
            let t = title ? title.toLowerCase() : null;
            let a = author ? author.toLowerCase() : null;

            data.content.forEach(item => {
                if ((!t && !a) || (t && item.title.toLowerCase().includes(t)) || (a && item.author.toLowerCase().includes(a))) {
                    result.push(item);
                }
            });
        } catch (err) {
            console.error(err);
        }

        return result;
    }
}

module.exports = Book;