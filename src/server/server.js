import express from 'express';
import config from 'config';
import { logger } from './logger';

const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const serverConfig = config.get('server');

const userRouter = require('./user/router');

const app = express();

app.use(cors());
app.use(bodyParser());
app.use(express.static(path.join('./dist')));

app.use('/api/user', userRouter);

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
})

app.listen(serverConfig.port, () => {
  logger.info(`server starting -> [port] ${serverConfig.port} [env] ${process.env.NODE_ENV}`);
})