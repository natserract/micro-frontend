"use strict";

var _expect = _interopRequireDefault(require("expect"));

var _interleave = _interopRequireDefault(require("../interleave"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('interleave', function () {
  it('blindly interleave', function () {
    (0, _expect["default"])((0, _interleave["default"])([], [])).toEqual([undefined]);
    (0, _expect["default"])((0, _interleave["default"])(['foo'], [])).toEqual(['foo']);
    (0, _expect["default"])((0, _interleave["default"])(['foo'], [1])).toEqual(['foo', 1, undefined]);
    (0, _expect["default"])((0, _interleave["default"])(['foo', 'bar'], [1])).toEqual(['foo', 1, 'bar']);
  });
  it('should be driven off the number of interpolations', function () {
    (0, _expect["default"])((0, _interleave["default"])(['foo', 'bar'], [])).toEqual(['foo']);
    (0, _expect["default"])((0, _interleave["default"])(['foo', 'bar', 'baz'], [1])).toEqual(['foo', 1, 'bar']);
    (0, _expect["default"])((0, _interleave["default"])([], [1])).toEqual([undefined, 1, undefined]);
    (0, _expect["default"])((0, _interleave["default"])(['foo'], [1, 2, 3])).toEqual(['foo', 1, undefined, 2, undefined, 3, undefined]);
  });
});