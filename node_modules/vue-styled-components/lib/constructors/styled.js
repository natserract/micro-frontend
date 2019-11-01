"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _css = _interopRequireDefault(require("./css"));

var _domElements = _interopRequireDefault(require("../utils/domElements"));

var _isValidElementType = _interopRequireDefault(require("../utils/isValidElementType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(createStyledComponent) {
  var styled = function styled(tagName) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!(0, _isValidElementType["default"])(tagName)) {
      throw new Error(tagName + ' is not allowed for styled tag type.');
    }

    return function (cssRules) {
      for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        interpolations[_key - 1] = arguments[_key];
      }

      return createStyledComponent(tagName, _css["default"].apply(void 0, [cssRules].concat(interpolations)), props);
    };
  };

  _domElements["default"].forEach(function (domElement) {
    styled[domElement] = styled(domElement);
  });

  return styled;
};

exports["default"] = _default;
module.exports = exports.default;