
/** Creates a callback that proxies node callback style arguments to an Express Response object.
 *  @param {express.Response} res Express HTTP Response
 *  @param {number} [status=200]  Status code to send on success
 *
 *  @example
 *    list(req, res) {
 *    collection.find({}, toRes(res));
 *  }
 */
export default function toRes(res, status = 200) {
  /* eslint-disable consistent-return */
  return (err, thing) => {
    let newThing;

    if (err) return res.status(500).send(err);

    if (thing && typeof thing.toObject === 'function') {
      newThing = thing.toObject();
    }
    res.status(status).json(newThing);
  };
  /* eslint-enable consistent-return */
}
