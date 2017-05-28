import resource from 'resource-router-middleware';
import Murals from '../models/murals';
import _ from '/lodash';

const SERVER_ERROR_MESSAGE = 'Something Broke';

/* eslint-disable no-unused-vars */
export default ({ config, db }) => resource({
/* eslint-enable no-unused-vars */

  /** Property name to store preloaded entity on `request`. */
  id: 'mural',

  /** For requests with an `id`, you can auto-load the entity.
   *  Errors terminate the request, success sets `req[id] = data`.
  */
  async load(req, id, callback) {
    let mural;

    try {
      mural = await Murals.findById(id);
      const err = mural ? null : 'Not found';
      callback(err, mural);
    } catch (err) {
      // if moongose throws 'CastError'
      // it passed in didn't meet the formatting requirements
      const error = err.name === 'CastError' ? 'Not found' : SERVER_ERROR_MESSAGE;
      callback(error, mural);
    }
  },

    /** GET / - List all murals */
  async list({ params }, res) {
    // const mural = new Murals({
    //   name: { first: 'John', last: '  Doe   ' },
    //   age: 25,
    // });

    // mural.save(function (err) {if (err) console.log ('Error on save!')});

    try {
      const murals = await Murals.find();
      res.json(murals);
    } catch (err) {
      console.log(err);
      res.status(500).send(SERVER_ERROR_MESSAGE);
    }
  },

  /** POST / - Create a new entity */
  async create({ body }, res) {
    const mural = new Murals(body);
    try {
      const savedMural = await mural.save();
      res.json(savedMural);
    } catch (err) {
      console.log(err);
      res.status(500).send(SERVER_ERROR_MESSAGE);
    }
  },

  /** GET /:id - Return a given entity */
  read({ mural }, res) {
    res.json(mural);
  },

  /** PUT /:id - Update a given entity */
  update({ mural, body }, res) {
    const muralObj = mural;
    console.log(body);

    _.mapKeys
    for (const key in body) {
      if (key !== 'id') {
        newFacet[key] = body[key];
      }
    }
    /* eslint-enable no-restricted-syntax */
    res.sendStatus(204);
  },
});
