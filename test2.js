const http = require('http');
http.createServer(function (req, res) {
    if (req.url === '/books') {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('NON ci sono libri qui!!!');
        res.end();
    } else if (req.url === '/droga') {
        res.writeHead(300, {'Content-Type': 'text/html'});
        res.write(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Convocazione Ufficiale</title>
            </head>
            <body>
                <h1>CERCAVI DELLA DROGA?</h1>
                <p>Sei appena cascato nel mio mega-tranello, questa e' una convocazione ufficiale in caserma alle
                18.30 di domani.</p>
                <p style="font-style: italic; text-decoration: underline;">IL MARESCIALLO.</p>
            </body>
            </html>`);
        res.end();
    } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Hello, World!!!');
        res.end();
    }
}).listen(8080);