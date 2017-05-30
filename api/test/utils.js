import mongoose from 'mongoose';
import async from 'async';
import initializeDb from '../src/db';

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
