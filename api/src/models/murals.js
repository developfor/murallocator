import mongoose from 'mongoose';
import _ from 'lodash';

const muralSchema = new mongoose.Schema({
  name: {
    first: String,
    last: { type: String, trim: true },
  },
  age: { type: Number, min: 0 },
});

muralSchema.methods.updateMural = function updateMural(body) {
  _.mapKeys(body, (value, key) => {
    if (key !== 'id') {
      this[key] = _.merge(this[key], value);
    }
  });
  return this;
};

const Murals = mongoose.model('Murals', muralSchema);
export default Murals;
