const repository = require('./repository');
import { logger } from '../logger';

module.exports = class handler {
  static addUser(req, res) {
    const user = req.body;
    console.log(user);
    repository.addUser(user).then(() => {
      logger.info(`access from ${req.header.host}`);
      logger.info('User added to Database');
      res.send('Added to Database');
    });
  }

  static getUsers(req, res) {
    repository.getUsers().then((users) => {
      logger.info(`access from ${req.header.host}`);
      res.send(`Get user info ${users}`);
    });
  }

  static signin(req, res) {
    repository.signin(req.body).then(() => {
      logger.info('signin');
      res.send('Signin');
    });
  }
};