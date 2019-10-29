"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isTag;

var _domElements = _interopRequireDefault(require("./domElements"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isTag(target) {
  if (typeof target === 'string') {
    return _domElements["default"].indexOf(target) !== -1;
  }
}

module.exports = exports.default;