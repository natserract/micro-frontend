"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _keyframes = _interopRequireDefault(require("../constructors/keyframes"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      from {\n        transform: rotate(0deg);\n      }\n\n      to {\n        transform: rotate(360deg);\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var styled;
describe('css features', function () {
  beforeEach(function () {
    styled = (0, _utils.resetStyled)();
  });
  it('should add vendor prefixes in the right order', function () {
    var rotate = (0, _keyframes["default"])(_templateObject());
    (0, _utils.expectCSSMatches)('@keyframes iVXCSc { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }', {
      rotate: rotate
    });
  });
});