import mongoose from 'mongoose';
import _ from 'lodash';

const muralSchema = new mongoose.Schema({
  artist_name: {
    first: { type: String, trim: true },
    last: { type: String, trim: true },
  },
  //location: { type: mongoose.Schema.Types.Locations },
  title: { type: String, trim: true },
  description: { type: String },
  image_id: { type: String },
  created_at: { type: Date },
  added_at: { type: Date },
  is_approved: { type: Boolean, default: false },
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
