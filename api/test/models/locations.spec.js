import chai from 'chai';
import _ from 'lodash';
import Murals from '../../src/models/murals';
import Locations from '../../src/models/locations';
import { validMural } from '../data/murals.data';

const should = chai.should();

describe('Model Location', () => {
  it('should create a new location and be associated to mural', (done) => {
    const mural = new Murals(validMural);
    const location = new Locations({
      name: 'Point',
      loc: {
        type: 'LineString',
        coordinates: [40, 5],
      },
    });
    location.save();
    mural.location = location;
    mural.save();
    mural.should.have.property('location').equal(location);
    done();
  });
});
