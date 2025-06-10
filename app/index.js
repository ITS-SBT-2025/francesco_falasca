const express = require('express')
const app = express();
const middleware = require('./main/middleware');
const routes = require('./routes/router');

middleware(app, express);
routes(app);

app.listen(3000);
console.log('Server is running on porot 3000');