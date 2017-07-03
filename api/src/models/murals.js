import mongoose from 'mongoose';
import _ from 'lodash';

let validateEmail = (email) => {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const muralSchema = new mongoose.Schema({
  submitter_name: {
    first: { type: String, trim: true },
    last: { type: String, trim: true },
  },
  submitter_email: {
    type: String,
    trim: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  artist_name: { type: String, trim: true },
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Locations',
  },
  title: { type: String, trim: true, required: true },
  description: { type: String },
  image_id: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
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
