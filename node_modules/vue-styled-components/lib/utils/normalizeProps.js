"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = normalizeProps;

var _lodash = _interopRequireDefault(require("lodash.zipobject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function normalizeProps() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (Array.isArray(props)) {
    return (0, _lodash["default"])(props);
  } else {
    return props;
  }
}

module.exports = exports.default;