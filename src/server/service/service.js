import { logger } from '../logger';

module.exports = class service {
  static module() {
    logger.info('service module');
  }
};