import express from 'express';
import config from 'config';
import { logger } from './logger';

const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const serverConfig = config.get('server');

const passport = require('./passport');
const session = require('express-session');

const userRouter = require('./user/router');
const serviceRouter = require('./service/router');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({ secret: 'secret-keyword', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join('./dist')));

app.use('/api/user', userRouter);
app.use('/api/service', serviceRouter);

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.listen(serverConfig.port, () => {
  logger.info(`server starting -> [port] ${serverConfig.port} [env] ${process.env.NODE_ENV}`);
});