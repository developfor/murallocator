import { expect } from 'chai';
import Murals from '../../src/models/murals';

describe('Mural', () => {
  it('should be invalid if name is empty', (done) => {
    const mural = new Murals({
      artist_name: {
        first: 'Foo',
        last: 'Bar',
      },
    });

    mural.save();

    mural.validate((err) => {
      expect(err).to.not.exist;
      done();
    });
  });
});
