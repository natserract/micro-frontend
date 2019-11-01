"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _css = _interopRequireDefault(require("./css"));

var _GlobalStyle = _interopRequireDefault(require("../models/GlobalStyle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var injectGlobal = function injectGlobal(strings) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var globalStyle = new _GlobalStyle["default"](_css["default"].apply(void 0, [strings].concat(interpolations)));
  globalStyle.generateAndInject();
};

var _default = injectGlobal;
exports["default"] = _default;
module.exports = exports.default;