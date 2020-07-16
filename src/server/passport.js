import config from 'config';
import { logger } from './logger';

const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const MongoClient = require('mongodb').MongoClient;
const dbConfig = config.get('DBserver');
const DBName = dbConfig.Name;
const DBURL = dbConfig.URL + DBName;
const OPTION = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const bcrypt = require('./bcrypt');

passport.use(new localStrategy({
  usernameField: 'userID',
  passwordField: 'password',
  session: false
}, async (userID, password, done) => {
  const client = await MongoClient.connect(DBURL, OPTION).catch((err) => {
    logger.info(err);
  });
  const db = client.db(DBName);
  const res = await db // eslint-disable-line no-unused-vars
    .collection('users')
    .findOne({userID: userID}, async (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: 'UserID or Password is wrong.' });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return done(null, false, { message: 'UserID or Password is wrong.' });
      }
      client.close();
      return done(null, user);
    });
}));

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser(async (user, cb) => {
  const client = await MongoClient.connect(DBURL, OPTION).catch((err) => {
    logger.error(err);
  });
  const db = client.db(DBName);
  const res = await db // eslint-disable-line no-unused-vars
    .collection('users')
    .findOne({
      userID: user.userID
    }, (err, user) => {
      client.close();
      cb(err, user);
    });
});

module.exports = passport;