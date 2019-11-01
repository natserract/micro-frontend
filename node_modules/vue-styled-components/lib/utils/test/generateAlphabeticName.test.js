"use strict";

var _generateAlphabeticName = _interopRequireDefault(require("../generateAlphabeticName"));

var _expect = _interopRequireDefault(require("expect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('generateAlphabeticName', function () {
  it('should create alphabetic names for number input data', function () {
    (0, _expect["default"])((0, _generateAlphabeticName["default"])(1000000000)).toEqual('cGNYzm');
    (0, _expect["default"])((0, _generateAlphabeticName["default"])(2000000000)).toEqual('fnBWYy');
  });
});