

const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const session = require('express-session');

const SQLiteStore = require('connect-sqlite3')(session);


app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());
app.use(morgan('combined'));
app.use(helmet());
app.use(session({
    secret: 'il mio segreto di pulcinella',
    resave: false,
    saveUninitialized: false,
    name: 'TOKEN',
    store: new SQLiteStore({ db: 'sessions.db', dir: './data/' })
}));

module.exports = middleware;