import mongoose from 'mongoose';
import debug from 'debug';
import util from 'util';
import bluebird from 'bluebird';

import envConfig from '../config/config';

export default (callback) => {
  const mongoUri = envConfig.mongo.host;
  mongoose.Promise = bluebird;

  mongoose.connect(mongoUri, { server: { socketOptions: { keepAlive: 1 } } }).then(
    () => {
      if (envConfig.mongooseDebug) {
        mongoose.set('debug', (collectionName, method, query, doc) => {
          debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
        });
      }
      callback();
    },
    (err) => {
      console.log(err);
      throw new Error(`unable to connect to database: ${mongoUri}`);
    },
  );
};
