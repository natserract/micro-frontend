"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expectCSSMatches = exports.resetStyled = void 0;

var _expect = _interopRequireDefault(require("expect"));

var _styled2 = _interopRequireDefault(require("../constructors/styled"));

var _StyleSheet = _interopRequireDefault(require("../models/StyleSheet"));

var _StyledComponent = _interopRequireDefault(require("../models/StyledComponent"));

var _ComponentStyle2 = _interopRequireDefault(require("../models/ComponentStyle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var index = 0;

var classNames = function classNames() {
  return String.fromCodePoint(97 + index++);
};

var resetStyled = function resetStyled() {
  _StyleSheet["default"].flush();

  index = 0;
  return (0, _styled2["default"])((0, _StyledComponent["default"])((0, _ComponentStyle2["default"])(classNames)));
};

exports.resetStyled = resetStyled;

var stripWhitespace = function stripWhitespace(str) {
  return str.trim().replace(/\s+/g, ' ').replace(/\s+\{/g, '{').replace(/\:\s+/g, ':');
};

var expectCSSMatches = function expectCSSMatches(expectation) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _opts$ignoreWhitespac = opts.ignoreWhitespace,
      ignoreWhitespace = _opts$ignoreWhitespac === void 0 ? true : _opts$ignoreWhitespac,
      _opts$styleSheet = opts.styleSheet,
      styleSheet = _opts$styleSheet === void 0 ? _StyleSheet["default"] : _opts$styleSheet;
  var css = styleSheet.rules().map(function (rule) {
    return rule.cssText;
  }).join('\n');

  if (ignoreWhitespace) {
    (0, _expect["default"])(stripWhitespace(css)).toEqual(stripWhitespace(expectation));
  } else {
    (0, _expect["default"])(css).toEqual(expectation);
  }

  return css;
};

exports.expectCSSMatches = expectCSSMatches;