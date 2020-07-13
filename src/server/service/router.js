const handler = require('./handler');
const express = require('express');
const passport = require('../passport')
const router = express.Router();

const { logger } = require('../logger');

router.get('/', passport, (req, res) => { // eslint-disable-line no-unused-vars
  logger.info('access service');
  handler.module();
})

module.exports = router;