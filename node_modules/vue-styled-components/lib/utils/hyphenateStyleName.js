"use strict";

var _uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;

function hyphenate(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;