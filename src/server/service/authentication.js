import bcrypt from 'bcrypt';

module.exports = class Bcrypt {
  static async compare(password, hashedpassword) {
    const res = await bcrypt.compare(password, hashedpassword);
    return res;
  }

  static async genHash(password) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }
}