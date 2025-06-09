const express = require('express')
const app = express();
const middleware = require('middleware');
const router = require('router');

app.use("/", express.static(path.join(__dirname, "/public"), { "extensions": ["html"] }));

middleware();
router(data);

app.listen(3000);