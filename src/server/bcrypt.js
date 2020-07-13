const bcrypt = require('bcrypt');

module.exports = class Bcrypt {
  static async compare(password, hashedpassword) {
    const res = await bcrypt.compare(password, hashedpassword);
    return res;
  }

  static async genHash(password) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }
};