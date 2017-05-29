import mongoose from 'mongoose';
import async from 'async';
import config from '../config/config';
import initializeDb from '../src/db';

// ensure the NODE_ENV is set to 'test'
// this is helpful when you would like to change behavior when testing

beforeEach((done) => {
  function clearCollections() {
    async.forEach(mongoose.connection.collections, (collectionName, done) => {
      const collection = mongoose.connection.collections[collectionName];
      if (collection) {
        collection.remove((err) => {
          if (err && err.message !== 'ns not found') done(err);
          done(null);
        });
      }
    });
    return done();
  }

  if (mongoose.connection.readyState === 0) {
    initializeDb(() => clearCollections());
  } else {
    return clearCollections();
  }
});

afterEach((done) => {
  mongoose.disconnect();
  return done();
});
