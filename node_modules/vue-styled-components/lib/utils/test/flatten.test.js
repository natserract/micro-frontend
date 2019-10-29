"use strict";

var _expect = _interopRequireDefault(require("expect"));

var _flatten = _interopRequireDefault(require("../flatten"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

describe('flatten', function () {
  it('doesnt merge strings', function () {
    (0, _expect["default"])((0, _flatten["default"])(['foo', 'bar', 'baz'])).toEqual(['foo', 'bar', 'baz']);
  });
  it('drops nulls', function () {
    (0, _expect["default"])((0, _flatten["default"])(['foo', false, 'bar', undefined, 'baz', null])).toEqual(['foo', 'bar', 'baz']);
  });
  it('doesnt drop any numbers', function () {
    (0, _expect["default"])((0, _flatten["default"])(['foo', 0, 'bar', NaN, 'baz', -1])).toEqual(['foo', '0', 'bar', 'NaN', 'baz', '-1']);
  });
  it('toStrings everything', function () {
    (0, _expect["default"])((0, _flatten["default"])([1, true])).toEqual(['1', 'true']);
  });
  it('hypenates objects', function () {
    var obj = {
      fontSize: '14px',
      WebkitFilter: 'blur(2px)'
    };
    var css = 'font-size: 14px; -webkit-filter: blur(2px);';
    (0, _expect["default"])((0, _flatten["default"])([obj])).toEqual([css]);
    (0, _expect["default"])((0, _flatten["default"])(['some:thing;', obj, 'something: else;'])).toEqual(['some:thing;', css, 'something: else;']);
  });
  it('handles nested objects', function () {
    var obj = {
      fontSize: '14px',
      '@media screen and (min-width: 250px)': {
        fontSize: '16px'
      },
      '&:hover': {
        fontWeight: 'bold'
      }
    };
    var css = 'font-size: 14px; @media screen and (min-width: 250px) {\n  font-size: 16px;\n} &:hover {\n  font-weight: bold;\n}';
    (0, _expect["default"])((0, _flatten["default"])([obj])).toEqual([css]);
    (0, _expect["default"])((0, _flatten["default"])(['some:thing;', obj, 'something: else;'])).toEqual(['some:thing;', css, 'something: else;']);
  });
  it('toStrings class instances', function () {
    var SomeClass = function () {
      function SomeClass() {
        _classCallCheck(this, SomeClass);
      }

      _createClass(SomeClass, [{
        key: "toString",
        value: function toString() {
          return 'some: thing;';
        }
      }]);

      return SomeClass;
    }();

    (0, _expect["default"])((0, _flatten["default"])([new SomeClass()])).toEqual(['some: thing;']);
  });
  it('flattens subarrays', function () {
    (0, _expect["default"])((0, _flatten["default"])([1, 2, [3, 4, 5], 'come:on;', 'lets:ride;'])).toEqual(['1', '2', '3', '4', '5', 'come:on;', 'lets:ride;']);
  });
  it('defers functions', function () {
    var func = function func() {
      return 'bar';
    };

    var funcWFunc = function funcWFunc() {
      return ['static', function (subfunc) {
        return subfunc ? 'bar' : 'baz';
      }];
    };

    (0, _expect["default"])((0, _flatten["default"])(['foo', func, 'baz'])).toEqual(['foo', func, 'baz']);
    (0, _expect["default"])((0, _flatten["default"])(['foo', funcWFunc, 'baz'])).toEqual(['foo', funcWFunc, 'baz']);
  });
  it('executes functions', function () {
    var func = function func() {
      return 'bar';
    };

    (0, _expect["default"])((0, _flatten["default"])(['foo', func, 'baz'], {
      bool: true
    })).toEqual(['foo', 'bar', 'baz']);
  });
  it('passes values to function', function () {
    var func = function func(_ref) {
      var bool = _ref.bool;
      return bool ? 'bar' : 'baz';
    };

    (0, _expect["default"])((0, _flatten["default"])(['foo', func], {
      bool: true
    })).toEqual(['foo', 'bar']);
    (0, _expect["default"])((0, _flatten["default"])(['foo', func], {
      bool: false
    })).toEqual(['foo', 'baz']);
  });
  it('recursively calls functions', function () {
    var func = function func() {
      return ['static', function (_ref2) {
        var bool = _ref2.bool;
        return bool ? 'bar' : 'baz';
      }];
    };

    (0, _expect["default"])((0, _flatten["default"])(['foo', func], {
      bool: true
    })).toEqual(['foo', 'static', 'bar']);
    (0, _expect["default"])((0, _flatten["default"])(['foo', func], {
      bool: false
    })).toEqual(['foo', 'static', 'baz']);
  });
});