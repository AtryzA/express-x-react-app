'use strict';

const handler = require('./handler');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log("router method")
  handler.handlermethod(req, res);
})

module.exports = router;