"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _flatten = _interopRequireDefault(require("../utils/flatten"));

var _StyleSheet = _interopRequireDefault(require("./StyleSheet"));

var _stylis = _interopRequireDefault(require("stylis"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ComponentStyle = function () {
  function ComponentStyle(rules, selector) {
    _classCallCheck(this, ComponentStyle);

    this.rules = rules;
    this.selector = selector;
  }

  _createClass(ComponentStyle, [{
    key: "generateAndInject",
    value: function generateAndInject() {
      if (!_StyleSheet["default"].injected) _StyleSheet["default"].inject();
      var flatCSS = (0, _flatten["default"])(this.rules).join('');
      var cssString = this.selector ? "".concat(this.selector, " { ").concat(flatCSS, " }") : flatCSS;
      var css = (0, _stylis["default"])('', cssString, false, false);

      _StyleSheet["default"].insert(css, {
        global: true
      });
    }
  }]);

  return ComponentStyle;
}();

exports["default"] = ComponentStyle;
module.exports = exports.default;