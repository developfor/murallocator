import mongoose from 'mongoose';
import config from '../config/config';

// ensure the NODE_ENV is set to 'test'
// this is helpful when you would like to change behavior when testing
process.env.NODE_ENV = 'test';

before((done) => {
  function clearCollections() {
    mongoose.connection.collections.each((collection) => {
      mongoose.connection.collections[collection].remove(() => {});
    });
    return done();
  }

  if (mongoose.connection.readyState === 0) {
    mongoose.connect(config.test.db, (err) => {
      if (err) throw err;
      return clearCollections();
    });
  } else {
    return clearCollections();
  }
});

afterEach((done) => {
  mongoose.disconnect();
  return done();
});
