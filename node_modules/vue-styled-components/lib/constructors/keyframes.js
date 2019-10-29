"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _StyleSheet = _interopRequireDefault(require("../models/StyleSheet"));

var _hash = _interopRequireDefault(require("glamor/lib/hash"));

var _generateAlphabeticName = _interopRequireDefault(require("../utils/generateAlphabeticName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

var makeAnimation = function makeAnimation(name, css) {
  return "\n@keyframes ".concat(name, " {\n   ").concat(css, "\n}\n");
};

var _default = function _default(css) {
  var name = (0, _generateAlphabeticName["default"])((0, _hash["default"])(replaceWhitespace(JSON.stringify(css))));
  var animation = makeAnimation(name, css);
  if (!_StyleSheet["default"].injected) _StyleSheet["default"].inject();

  _StyleSheet["default"].insert(animation);

  return name;
};

exports["default"] = _default;
module.exports = exports.default;