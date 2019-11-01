"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(strings, interpolations) {
  return interpolations.reduce(function (array, interp, i) {
    return array.concat(interp, strings[i + 1]);
  }, [strings[0]]);
};

exports["default"] = _default;
module.exports = exports.default;