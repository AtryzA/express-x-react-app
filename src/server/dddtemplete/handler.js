const repository = require('./repository');
import { logger } from '../logger';

module.exports = class handler {
  static handlermethod(req, res) {
    repository.repositorymethod(req).then(() => {
      console.log('handler method')
      logger.info(`access from ${req.header.host}`)
      res.send('repository method success');
    })
  }
}