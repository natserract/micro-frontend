"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _hash = _interopRequireDefault(require("glamor/lib/hash"));

var _flatten = _interopRequireDefault(require("../utils/flatten"));

var _StyleSheet = _interopRequireDefault(require("./StyleSheet"));

var _stylis = _interopRequireDefault(require("stylis"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _default = function _default(nameGenerator) {
  var inserted = {};

  var ComponentStyle = function () {
    function ComponentStyle(rules) {
      _classCallCheck(this, ComponentStyle);

      this.rules = rules;

      _stylis["default"].set({
        keyframe: false
      });

      if (!_StyleSheet["default"].injected) _StyleSheet["default"].inject();
      this.insertedRule = _StyleSheet["default"].insert('');
    }

    _createClass(ComponentStyle, [{
      key: "generateAndInjectStyles",
      value: function generateAndInjectStyles(executionContext) {
        var flatCSS = (0, _flatten["default"])(this.rules, executionContext).join('').replace(/^\s*\/\/.*$/gm, '');
        var hash = (0, _hash["default"])(flatCSS);

        if (!inserted[hash]) {
          var selector = nameGenerator(hash);
          inserted[hash] = selector;
          var css = (0, _stylis["default"])(".".concat(selector), flatCSS);
          this.insertedRule.appendRule(css);
        }

        return inserted[hash];
      }
    }]);

    return ComponentStyle;
  }();

  return ComponentStyle;
};

exports["default"] = _default;
module.exports = exports.default;