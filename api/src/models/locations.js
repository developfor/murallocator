import mongoose from 'mongoose';

// http://mongoosejs.com/docs/guide.html#typeKey
const locationSchema = new mongoose.Schema({
  loc: { type: String, coordinates: [Number] },
  name: { $type: String, required: true },
}, { typeKey: '$type' });

const Locations = mongoose.model('Locations', locationSchema);
export default Locations;
