'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://mongoosejs.com/docs/guide.html#typeKey
var locationSchema = new _mongoose2.default.Schema({
  loc: { type: String, coordinates: [Number] },
  name: { $type: String, required: true }
}, { typeKey: '$type' });

var Locations = _mongoose2.default.model('Locations', locationSchema);
exports.default = Locations;
//# sourceMappingURL=locations.js.map