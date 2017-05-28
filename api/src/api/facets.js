import resource from 'resource-router-middleware';
import facets from '../models/facets';

/* eslint-disable no-unused-vars */
export default ({ config, db }) => resource({
/* eslint-enable no-unused-vars */

  /** Property name to store preloaded entity on `request`. */
  id: 'facet',

  /** For requests with an `id`, you can auto-load the entity.
   *  Errors terminate the request, success sets `req[id] = data`.
  */
  load(req, id, callback) {
    const facet = facets.find(facetObj => facetObj.id === id);
    const err = facet ? null : 'Not found';
    callback(err, facet);
  },

  /** GET / - List all entities */
  index({ params }, res) {
    res.json(facets);
  },

  /** POST / - Create a new entity */
  create({ body }, res) {
    const newBody = body;
    newBody.id = facets.length.toString(36);
    facets.push(newBody);
    res.json(newBody);
  },

  /** GET /:id - Return a given entity */
  read({ facet }, res) {
    res.json(facet);
  },

  /** PUT /:id - Update a given entity */
  update({ facet, body }, res) {
    const newFacet = facet;

    /* eslint-disable no-restricted-syntax */
    for (const key in body) {
      if (key !== 'id') {
        newFacet[key] = body[key];
      }
    }
    /* eslint-enable no-restricted-syntax */
    res.sendStatus(204);
  },

  /** DELETE /:id - Delete a given entity */
  delete({ facet }, res) {
    facets.splice(facets.indexOf(facet), 1);
    res.sendStatus(204);
  },
});
