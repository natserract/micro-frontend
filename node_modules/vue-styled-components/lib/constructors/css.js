"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _interleave = _interopRequireDefault(require("../utils/interleave"));

var _flatten = _interopRequireDefault(require("../utils/flatten"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(rules) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  return (0, _flatten["default"])((0, _interleave["default"])(rules, interpolations));
};

exports["default"] = _default;
module.exports = exports.default;