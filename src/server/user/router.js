const handler = require('./handler');
const express = require('express');
const passport = require('passport');
const { logger } = require('../logger');
const router = express.Router();

router.get('/', (req, res) => {
  handler.getUsers(req, res);
});

router.post('/signup', (req, res) => {
  handler.addUser(req, res);
});

router.post('/signin', passport.authenticate('local', {session: true}), (req, res) => {
  handler.signin(req, res);
});

router.get('/signout', (req, res) => {
  req.logout();
  logger.info('signout');
  res.redirect('signin');
});

module.exports = router;