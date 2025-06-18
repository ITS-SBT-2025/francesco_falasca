const fs = require('fs');
const config = require('config');

const express = require('express');
const app = express();

let filechiave = config.get('chiaveprivata');

const miachiave = fs.readFileSync(filechiave);
const miocert = fs.readFileSync(config.get('certificato'));
const credential = { key: miachiave, cert: miocert };

const middleware = require('./main/middleware.js');
const router = require('./routes/router.js');

const https = require('https');
const secureServer = https.createServer(credential, app);

const http = require('http');
const unsecureServer = http.createServer(app);

app.use("/", express.static(path.join(__dirname, "/public"), { "extensions": ["html"] }));

middleware(app, express);
router(app);

secureServer.listen(443, () => { console.log('Secure server is running on port 443') });
unsecureServer.listen(80, () => { console.log('Unsecure server is running on port 80') });