import resource from 'resource-router-middleware';
import Murals from '../models/murals';

const SERVER_ERROR_MESSAGE = 'Something Broke';

/* eslint-disable no-unused-vars */
export default () => resource({
/* eslint-enable no-unused-vars */

  /** Property name to store preloaded entity on `request`. */
  id: 'mural',
  mergeParams: true,

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
  async update({ mural, body }, res) {
    const muralObj = mural.updateMural(body);
    try {
      const updatedMural = await muralObj.save();
      res.json(updatedMural);
    } catch (err) {
      console.log(err);
      res.status(500).send(SERVER_ERROR_MESSAGE);
    }
  },

  /** DELETE /:id - Delete a given entity */
  async delete({ mural }, res) {
    try {
      await mural.remove();
      res.sendStatus(204);
    } catch (err) {
      console.log(err);
      res.status(500).send(SERVER_ERROR_MESSAGE);
    }
  },
});

export const featuredMurals = (req, res) => {
  res.json([]);
};

export const nearByMurals = (req, res) => {
  res.json([]);
};

export const recentlyUploadedMurals = (req, res) => {
  res.json([]);
};

