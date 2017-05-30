import mongoose from 'mongoose';
import initializeDb from '../src/db';

beforeEach((done) => {
  function clearCollections() {
    const keys = Object.keys(mongoose.connection.collections);
    keys.forEach((key) => {
      mongoose.connection.collections[key].remove((err) => {
        if (err && err.message !== 'ns not found') done(err);
      });
    });
    return done();
  }

  if (mongoose.connection.readyState === 0) {
    initializeDb(() => clearCollections());
  } else {
    return clearCollections();
  }
});

after((done) => {
  mongoose.disconnect();
  return done();
});
