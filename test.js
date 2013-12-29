'use strict';

var assert = require('assert');
var pdp = require('./index');

var input = 'Array\n(\n    [a] => apple\n    [b] => banana\n    [c] => Array\n        (\n            [0] => x\n            [1] => y\n            [2] => z\n\n        )\n)';
var output = {
  'a': 'apple',
  'b': 'banana',
  'c': ['x', 'y', 'z']
};

assert.deepEqual(pdp(input), output);
