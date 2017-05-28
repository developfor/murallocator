import mongoose from 'mongoose';
import debug from 'debug';
import util from 'util';

import envConfig from '../config/config';

export default (callback) => {
  const mongoUri = envConfig.mongo.host;
  mongoose.connect(mongoUri, { server: { socketOptions: { keepAlive: 1 } } });
  mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${mongoUri}`);
  });

  if (envConfig.mongooseDebug) {
    mongoose.set('debug', (collectionName, method, query, doc) => {
      debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
    });
  }
  // connect to a database if needed, then pass it to `callback`:
  callback();
};
