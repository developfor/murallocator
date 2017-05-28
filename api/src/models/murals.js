import mongoose from 'mongoose';

const muralSchema = new mongoose.Schema({
});

const Murals = mongoose.model('Murals', muralSchema);
export default Murals;
