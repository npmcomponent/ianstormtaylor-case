
var camel = require('ianstormtaylor-to-camel-case');
var capital = require('ianstormtaylor-to-capital-case');
var constant = require('ianstormtaylor-to-constant-case');
var dot = require('ianstormtaylor-to-dot-case');
var none = require('ianstormtaylor-to-no-case');
var pascal = require('ianstormtaylor-to-pascal-case');
var sentence = require('ianstormtaylor-to-sentence-case');
var slug = require('ianstormtaylor-to-slug-case');
var snake = require('ianstormtaylor-to-snake-case');
var space = require('ianstormtaylor-to-space-case');
var title = require('ianstormtaylor-to-title-case');

/**
 * Camel.
 */

exports.camel = camel;

/**
 * Pascal.
 */

exports.pascal = pascal;

/**
 * Dot. Should precede lowercase.
 */

exports.dot = dot;

/**
 * Slug. Should precede lowercase.
 */

exports.slug = slug;

/**
 * Snake. Should precede lowercase.
 */

exports.snake = snake;

/**
 * Space. Should precede lowercase.
 */

exports.space = space;

/**
 * Constant. Should precede uppercase.
 */

exports.constant = constant;

/**
 * Capital. Should precede sentence and title.
 */

exports.capital = capital;

/**
 * Title.
 */

exports.title = title;

/**
 * Sentence.
 */

exports.sentence = sentence;

/**
 * Convert a `string` to lower case from camel, slug, etc. Different that the
 * usual `toLowerCase` in that it will try to break apart the input first.
 *
 * @param {String} string
 * @return {String}
 */

exports.lower = function (string) {
  return none(string).toLowerCase();
};

/**
 * Convert a `string` to upper case from camel, slug, etc. Different that the
 * usual `toUpperCase` in that it will try to break apart the input first.
 *
 * @param {String} string
 * @return {String}
 */

exports.upper = function (string) {
  return none(string).toUpperCase();
};

/**
 * Invert each character in a `string` from upper to lower and vice versa.
 *
 * @param {String} string
 * @return {String}
 */

exports.inverse = function (string) {
  for (var i = 0, char; char = string[i]; i++) {
    if (!/[a-z]/i.test(char)) continue;
    var upper = char.toUpperCase();
    var lower = char.toLowerCase();
    string[i] = char == upper ? lower : upper;
  }
  return string;
};

/**
 * None.
 */

exports.none = none;