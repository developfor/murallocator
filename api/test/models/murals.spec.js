import chai from 'chai';
import _ from 'lodash';
import Murals from '../../src/models/murals';
import { validMural } from '../data/murals.data';

const should = chai.should();

describe('Mural', () => {
  it('should create a new mural without errors', (done) => {
    const mural = new Murals(validMural);
    mural.validate((err) => {
      should.not.exist(err);
      mural.should.have.property('is_approved').equal(false);
      done();
    });
  });

  it('should be invalid if title is empty', (done) => {
    const muralWithoutTitle = _.omit(validMural, 'title');
    const mural = new Murals(muralWithoutTitle);
    mural.validate((err) => {
      should.exist(err);
      should.exist(err.errors.title);
      done();
    });
  });

  it('should be invalid if image id is empty', (done) => {
    const muralWithoutImageId = _.omit(validMural, 'image_id');
    const mural = new Murals(muralWithoutImageId);
    mural.validate((err) => {
      should.exist(err);
      should.exist(err.errors.image_id);
      done();
    });
  });
});


  // artist_name: {
  //   first: { type: String, trim: true },
  //   last: { type: String, trim: true },
  // },
  // // location: { type: mongoose.Schema.Types.Locations },
  // title: { type: String, trim: true },
  // description: { type: String },
  // image_id: { type: String },
  // created_at: { type: Date, default: Date.now },
  // made_at: { type: Date },
  // is_approved: { type: Boolean, default: false },