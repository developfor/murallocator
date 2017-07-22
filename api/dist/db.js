'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _config = require('../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (callback) {
  var mongoUri = _config2.default.mongo.host;
  _mongoose2.default.Promise = _bluebird2.default;

  _mongoose2.default.connect(mongoUri, { server: { socketOptions: { keepAlive: 1 } } }).then(function () {
    if (_config2.default.mongooseDebug) {
      _mongoose2.default.set('debug', function (collectionName, method, query, doc) {
        (0, _debug2.default)(collectionName + '.' + method, _util2.default.inspect(query, false, 20), doc);
      });
    }
    callback();
  }, function (err) {
    console.log(err);
    throw new Error('unable to connect to database: ' + mongoUri);
  });
};
//# sourceMappingURL=db.js.map