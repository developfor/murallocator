'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _package = require('../../package.json');

var _murals = require('./murals');

var _murals2 = _interopRequireDefault(_murals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-unused-vars */
exports.default = function (_ref) {
  var config = _ref.config,
      db = _ref.db;

  /* eslint-enable no-unused-vars */

  var api = (0, _express.Router)();

  // murals api
  api.use('/murals/featured-murals', _murals.featuredMurals);
  api.use('/murals/near-by-murals', _murals.nearByMurals);
  api.use('/murals/recently-uploaded-murals', _murals.recentlyUploadedMurals);
  api.use('/murals', (0, _murals2.default)());

  // perhaps expose some API metadata at the root
  api.get('/', function (req, res) {
    res.json({ version: _package.version });
  });

  return api;
};
//# sourceMappingURL=index.js.map