'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = 'LeetCode-Problems/helpers/twoPointers.js';

test('two-pointer reverse terminates and reverses the array', () => {
  const { run } = load(FILE); // the old version never finished its own example call
  assert.deepEqual(run('reverseArray([1, 2, 3, 4, 5])'), [5, 4, 3, 2, 1]);
  assert.deepEqual(run('reverseArray([1, 2])'), [2, 1]);
  assert.deepEqual(run('reverseArray([])'), []);
});
