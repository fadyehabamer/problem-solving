'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = 'LeetCode-Problems/helpers/destructing.js';

test('destructing example runs without a ReferenceError', () => {
  assert.equal(loadError(FILE), null);
});

test('destructuring swap exchanges the two values', () => {
  const { run } = load(FILE);
  assert.deepEqual(run('[a, b]'), [2, 1]);
});
