// const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const util = require('util');

const debug = require('debug')('express-mongoose-es6-rest-api:index');
// config should be imported before importing any other file
const config = require('./config/config');
const app = require('./config/express');

// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign

// plugin bluebird promise in mongoose
mongoose.Promise = Promise;
mongoose.set('useCreateIndex', true);
const mongoUri = config.mongo.host;
// console.log(mongoUri);

// connect to real mongo db
mongoose.connect(mongoUri, { keepAlive: 1, useNewUrlParser: true });
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

// connect to mock mongo db
// const mongoServer = new MongoMemoryServer();

// mongoServer.getConnectionString().then((mongoUri) => {
//   const mongooseOpts = { // options for mongoose 4.11.3 and above
//     autoReconnect: true,
//     reconnectTries: Number.MAX_VALUE,
//     reconnectInterval: 1000,
//   };

//   mongoose.connect(mongoUri, mongooseOpts, { keepAlive: 1, useNewUrlParser: true });

//   mongoose.connection.on('error', (e) => {
//     if (e.message.code === 'ETIMEDOUT') {
//       console.log(e);
//       mongoose.connect(mongoUri, mongooseOpts);
//     }
//     console.log(e);
//   });

//   mongoose.connection.once('open', () => {
//     console.log(`MongoDB successfully connected to ${mongoUri}`);
//   });
// });

// print mongoose logs in dev env
if (config.mongooseDebug) {
  mongoose.set('debug', (collectionName, method, query, doc) => {
    debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
  });
}

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
  // listen on port config.port
  app.listen(config.port, () => {
    console.info(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
  });
}

module.exports = app;
