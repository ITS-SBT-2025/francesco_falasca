function setMiddleware() {
    const cookieParser = require('cookie-parser');
    const morgan = require('morgan');

    app.use(express.urlencoded());
    app.use(express.json());
    app.use(cookieParser());
    app.use(morgan('combined'));
}

exports.middleware = setMiddleware;