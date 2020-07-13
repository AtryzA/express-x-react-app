import config from 'config';
import bcrypt from '../bcrypt';

const { logger } = require('../logger');
const User = require('./user');
const MongoClient = require('mongodb').MongoClient;
const dbConfig = config.get('DBserver');

const DBName = dbConfig.Name;
const DBURL = dbConfig.URL + DBName;
const OPTION =  {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

module.exports = class repository {
  static async addUser(user) {
    user.password = await bcrypt.genHash(user.password);
    const userData = new User(
      user['userID'],
      user['username'],
      user['password']
    );
    const client = await MongoClient.connect(DBURL, OPTION).catch((err) => {
      logger.error(err);
    });
    const db = client.db(DBName);
    const res = await db
      .collection('users')
      .insertOne(userData);
    client.close();
    return res.result;
  }

  static async getUsers() {
    const client = await MongoClient.connect(DBURL, OPTION).catch((err) => {
      logger.error(err);
    });
    const db = client.db(DBName);
    const users = await db
      .collection('users')
      .find()
      .toArray();
    client.close();
    return users;
  }

  static async deleteUser(userID) {
    const client = await MongoClient.connect(DBURL, OPTION).catch((err) => {
      logger.error(err);
    });
    const db = client.db(DBName);
    const res = await db
      .collection('users')
      .deleteOne({'userID': userID});
    client.close();
    return res.result;
  }

  static async signin(user) {
    logger.info(user);
  }
};