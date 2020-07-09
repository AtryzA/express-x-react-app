const handler = require('./handler');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  handler.getUsers(req, res);
})

router.post('/', (req, res) => {
  handler.addUser(req, res);
})

module.exports = router;