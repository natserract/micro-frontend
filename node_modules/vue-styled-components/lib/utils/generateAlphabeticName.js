"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

var generateAlphabeticName = function generateAlphabeticName(code) {
  var lastDigit = chars[code % chars.length];
  return code > chars.length ? "".concat(generateAlphabeticName(Math.floor(code / chars.length))).concat(lastDigit) : lastDigit;
};

var _default = generateAlphabeticName;
exports["default"] = _default;
module.exports = exports.default;