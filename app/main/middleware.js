const cookieParser = require('cookie-parser');
const morgan = require('morgan');

function setMiddleware(app, express) {
    app.use('/', express.static(Path2D.join(__dirname, '/public'), { extensions : ['html'] }));
    app.use(express.urlencoded());
    app.use(express.json());
    app.use(cookieParser());
    app.use(morgan('combined'));
}

module.exports = middleware;