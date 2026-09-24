'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = 'LeetCode-Problems/helpers/stack.js';

test('peek returns the top (last pushed) element without removing it', () => {
  const { run } = load(FILE);
  assert.equal(run('var s = ["a", "b", "c"]; peek(s)'), 'c');
  assert.deepEqual(run('s'), ['a', 'b', 'c']);
  assert.equal(run('peek([])'), undefined);
});
