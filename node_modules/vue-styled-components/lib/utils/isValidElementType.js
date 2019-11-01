"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isValidElementType;

var _isTag = _interopRequireDefault(require("./isTag"));

var _isVueComponent = _interopRequireDefault(require("./isVueComponent"));

var _isStyledComponent = _interopRequireDefault(require("./isStyledComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isValidElementType(target) {
  return (0, _isStyledComponent["default"])(target) || (0, _isVueComponent["default"])(target) || (0, _isTag["default"])(target);
}

module.exports = exports.default;