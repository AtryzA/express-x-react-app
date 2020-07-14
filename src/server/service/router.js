const handler = require('./handler');
const express = require('express');
const authenticate = require('../auth');
const router = express.Router();

const { logger } = require('../logger');

router.get('/', authenticate, (req, res) => { // eslint-disable-line no-unused-vars
  logger.info('access service');
  handler.module();
});

module.exports = router;