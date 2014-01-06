'use strict';

var assert = require('assert');
var pdp = require('./index');

var input = 'Array\n(\n    [a] => apple\n    [b] => This is a very long line,\nthat have been split in two\n    [c] =>\n    [d] => Array\n        (\n            [0] => x\n            [1] => y\n            [2] => z\n\n        )\n)';
var output = {
  'a': 'apple',
  'b': 'This is a very long line, that have been split in two',
  'c': '',
  'd': ['x', 'y', 'z']
};

assert.deepEqual(pdp(input), output);
