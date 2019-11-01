"use strict";

var _StyleSheet = _interopRequireDefault(require("../StyleSheet"));

var _utils = require("../../test/utils");

var _expect = _interopRequireDefault(require("expect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('stylesheet', function () {
  beforeEach(function () {
    (0, _utils.resetStyled)();
  });
  describe('inject', function () {
    beforeEach(function () {
      _StyleSheet["default"].inject();
    });
    it('should inject the global sheet', function () {
      (0, _expect["default"])(_StyleSheet["default"].globalStyleSheet.injected).toBe(true);
    });
    it('should inject the component sheet', function () {
      (0, _expect["default"])(_StyleSheet["default"].componentStyleSheet.injected).toBe(true);
    });
    it('should specify that the sheets have been injected', function () {
      (0, _expect["default"])(_StyleSheet["default"].injected).toBe(true);
    });
  });
  describe('flush', function () {
    beforeEach(function () {
      _StyleSheet["default"].flush();
    });
    it('should flush the global sheet', function () {
      (0, _expect["default"])(_StyleSheet["default"].globalStyleSheet.injected).toBe(false);
    });
    it('should flush the component sheet', function () {
      (0, _expect["default"])(_StyleSheet["default"].componentStyleSheet.injected).toBe(false);
    });
    it('should specify that the sheets are no longer injected', function () {
      (0, _expect["default"])(_StyleSheet["default"].injected).toBe(false);
    });
  });
  describe('insert with the global option', function () {
    beforeEach(function () {
      _StyleSheet["default"].insert('a { color: green }', {
        global: true
      });
    });
    it('should insert into the global sheet', function () {
      (0, _expect["default"])(_StyleSheet["default"].globalStyleSheet.rules()).toEqual([{
        cssText: 'a { color: green }'
      }]);
    });
    it('should not inject into the component sheet', function () {
      (0, _expect["default"])(_StyleSheet["default"].componentStyleSheet.rules()).toEqual([]);
    });
  });
  describe('insert without the global option', function () {
    beforeEach(function () {
      _StyleSheet["default"].insert('.hash1234 { color: blue }');
    });
    it('should inject into the component sheet', function () {
      (0, _expect["default"])(_StyleSheet["default"].componentStyleSheet.rules()).toEqual([{
        cssText: '.hash1234 { color: blue }'
      }]);
    });
    it('should not inject into the global sheet', function () {
      (0, _expect["default"])(_StyleSheet["default"].globalStyleSheet.rules()).toEqual([]);
    });
  });
});