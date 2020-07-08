import express from 'express';
import path from 'path';
import config from 'config';
import { logger } from './logger';

const serverConfig = config.get('server');

const testrouter = require('./test/router');

const app = express();

app.use(express.static(path.join('./dist')));

app.use('/api/test', testrouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
})

app.listen(serverConfig.port, () => {
  logger.info(`server starting -> [port] ${serverConfig.port} [env] ${process.env.NODE_ENV}`);
})