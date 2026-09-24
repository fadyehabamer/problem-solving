'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = 'LeetCode-Problems/removeDuplicateSorted.js';

test('removeDuplicates returns the unique count and compacts the prefix', () => {
  const { run } = load(FILE);
  assert.equal(run('var a = [1,1,2]; removeDuplicates(a)'), 2);
  assert.deepEqual(run('a.slice(0, 2)'), [1, 2]);
  assert.equal(run('var b = [0,0,1,1,1,2,2,3,3,4]; removeDuplicates(b)'), 5);
  assert.deepEqual(run('b.slice(0, 5)'), [0, 1, 2, 3, 4]);
  assert.equal(run('removeDuplicates([-3,-3,-1,0,0])'), 3);
});

test('removeDuplicates returns 0 for an empty array', () => {
  const { run } = load(FILE);
  assert.equal(run('removeDuplicates([])'), 0);
});
