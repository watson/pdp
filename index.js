'use strict';

var Parser = function (dump) {
  this.result = {};
  this._lines = dump.split('\n');
  this._currentLine = -1;
  this._parse();
};

Parser.prototype._parse = function () {
  var line = this._next();

  if (line !== 'Array')
    throw new Error('This module currently only supports Array dumps');

  this.result = this._parseArray();
};

Parser.prototype._next = function () {
  var line;
  // skip blank lines while keeping the stack shallow
  while ((line = this._lines[++this._currentLine].trim()) === '') {}
  return line;
};

Parser.prototype._parseArray = function () {
  var line = this._next(),
      result = {},
      match, key, val;

  if (line !== '(')
    throw new Error('Unexpected start of Array');

  while ((line = this._next()) !== ')') {
    if (!line) throw new Error('Unexpected end of Array');
    match = line.match(/^\[(\w*)\] =>(.*)$/);
    if (!match) {
      // simple multi-line support (too simple?)
      result[key] += ' '+line;
      continue;
    }
    key = match[1];
    val = match[2].trim();
    if (val === 'Array') val = this._parseArray();
    if (key === '0') result = []; // numeric array detected
    result[key] = val;
  }

  return result;
};

module.exports = function (dump) {
  var parser = new Parser(dump);
  return parser.result;
};
