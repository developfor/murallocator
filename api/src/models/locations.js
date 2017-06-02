import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
  name: { type: String },
  loc: { type: String, coordinates: [Number] },
}, { typeKey: '$type' });

const Locations = mongoose.model('Locations', locationSchema);
export default Locations;
