'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recentlyUploadedMurals = exports.nearByMurals = exports.featuredMurals = undefined;

var _resourceRouterMiddleware = require('resource-router-middleware');

var _resourceRouterMiddleware2 = _interopRequireDefault(_resourceRouterMiddleware);

var _murals = require('../models/murals');

var _murals2 = _interopRequireDefault(_murals);

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var SERVER_ERROR_MESSAGE = 'Something Broke';

/* eslint-disable no-unused-vars */

exports.default = function () {
  return (0, _resourceRouterMiddleware2.default)({
    /* eslint-enable no-unused-vars */

    /** Property name to store preloaded entity on `request`. */
    id: 'mural',
    mergeParams: true,

    /** For requests with an `id`, you can auto-load the entity.
     *  Errors terminate the request, success sets `req[id] = data`.
    */
    load: function load(req, id, callback) {
      var _this = this;

      return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var mural, err, error;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                mural = void 0;
                _context.prev = 1;
                _context.next = 4;
                return _murals2.default.findById(id);

              case 4:
                mural = _context.sent;
                err = mural ? null : 'Not found';

                callback(err, mural);
                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](1);

                // if moongose throws 'CastError'
                // it passed in didn't meet the formatting requirements
                error = _context.t0.name === 'CastError' ? 'Not found' : SERVER_ERROR_MESSAGE;

                callback(error, mural);

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[1, 9]]);
      }))();
    },


    /** GET / - List all murals */
    list: function list(_ref, res) {
      var _this2 = this;

      var params = _ref.params;
      return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        var murals;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _murals2.default.find();

              case 3:
                murals = _context2.sent;

                res.json(murals);
                _context2.next = 11;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2['catch'](0);

                console.log(_context2.t0);
                res.status(500).send(SERVER_ERROR_MESSAGE);

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[0, 7]]);
      }))();
    },


    /** POST / - Create a new entity */
    create: function create(_ref2, req, res) {
      var body = _ref2.body;

      var _this3 = this;

      return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
        var mural, savedMural;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // console.log(body)
                mural = new _murals2.default(body);


                _shortid2.default.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-');

                mural.mural_id = _shortid2.default.generate();
                mural.is_approved = false;
                mural.submitter_name.first = body.email;
                mural.submitter_email = body.email;
                mural.title = body.title;
                mural.description = body.description;
                mural.artist_name = body.artistName;

                console.log(mural);

                _context3.prev = 10;
                _context3.next = 13;
                return mural.save();

              case 13:
                savedMural = _context3.sent;

                res.json(savedMural);
                // console.log("savedMural")
                _context3.next = 20;
                break;

              case 17:
                _context3.prev = 17;
                _context3.t0 = _context3['catch'](10);

                // console.log(err);
                res.status(500).send(SERVER_ERROR_MESSAGE);

              case 20:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3, [[10, 17]]);
      }))();
    },


    /** GET /:id - Return a given entity */
    read: function read(_ref3, res) {
      var mural = _ref3.mural;

      res.json(mural);
    },


    /** PUT /:id - Update a given entity */
    update: function update(_ref4, res) {
      var _this4 = this;

      var mural = _ref4.mural,
          body = _ref4.body;
      return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
        var muralObj, updatedMural;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                muralObj = mural.updateMural(body);
                _context4.prev = 1;
                _context4.next = 4;
                return muralObj.save();

              case 4:
                updatedMural = _context4.sent;

                res.json(updatedMural);
                _context4.next = 12;
                break;

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4['catch'](1);

                console.log(_context4.t0);
                res.status(500).send(SERVER_ERROR_MESSAGE);

              case 12:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4, [[1, 8]]);
      }))();
    },


    /** DELETE /:id - Delete a given entity */
    delete: function _delete(_ref5, res) {
      var _this5 = this;

      var mural = _ref5.mural;
      return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return mural.remove();

              case 3:
                res.sendStatus(204);
                _context5.next = 10;
                break;

              case 6:
                _context5.prev = 6;
                _context5.t0 = _context5['catch'](0);

                console.log(_context5.t0);
                res.status(500).send(SERVER_ERROR_MESSAGE);

              case 10:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this5, [[0, 6]]);
      }))();
    }
  });
};

var featuredMurals = exports.featuredMurals = function featuredMurals(req, res) {
  res.json([]);
};

var nearByMurals = exports.nearByMurals = function nearByMurals(req, res) {
  res.json([]);
};

var recentlyUploadedMurals = exports.recentlyUploadedMurals = function recentlyUploadedMurals(req, res) {
  res.json([]);
};
//# sourceMappingURL=murals.js.map