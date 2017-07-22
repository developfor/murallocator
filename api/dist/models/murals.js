'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validateEmail = function validateEmail(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

var muralSchema = new _mongoose2.default.Schema({
  submitter_name: {
    first: { type: String, trim: true },
    last: { type: String, trim: true }
  },
  submitter_email: {
    type: String,
    trim: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  artist_name: { type: String, trim: true },
  location: {
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'Locations'
  },
  mural_id: { type: String, required: true, unique: true },
  title: { type: String, trim: true, required: true },
  description: { type: String },
  image_id: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  is_approved: { type: Boolean, default: false }
});

muralSchema.methods.updateMural = function updateMural(body) {
  var _this = this;

  _lodash2.default.mapKeys(body, function (value, key) {
    if (key !== 'id') {
      _this[key] = _lodash2.default.merge(_this[key], value);
    }
  });
  return this;
};

var Murals = _mongoose2.default.model('Murals', muralSchema);
exports.default = Murals;
//# sourceMappingURL=murals.js.map