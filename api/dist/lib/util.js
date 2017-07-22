'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toRes;

/** Creates a callback that proxies node callback style arguments to an Express Response object.
 *  @param {express.Response} res Express HTTP Response
 *  @param {number} [status=200]  Status code to send on success
 *
 *  @example
 *    list(req, res) {
 *    collection.find({}, toRes(res));
 *  }
 */
function toRes(res) {
  var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

  /* eslint-disable consistent-return */
  return function (err, thing) {
    var newThing = void 0;

    if (err) return res.status(500).send(err);

    if (thing && typeof thing.toObject === 'function') {
      newThing = thing.toObject();
    }
    res.status(status).json(newThing);
  };
  /* eslint-enable consistent-return */
}
//# sourceMappingURL=util.js.map