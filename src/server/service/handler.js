const service = require('./service');
const { logger } = require('../logger');

module.exports = class handler {
  static module() {
    logger.info('handler module');
    service.module();
  }
};