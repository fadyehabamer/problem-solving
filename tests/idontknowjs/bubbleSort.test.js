'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('../helpers/load');

const FILE = 'IdontKnowJS/Algorithms & DataStructures/ALGORITHMS/bubbleSort.js';

test('both bubble sort demos sort their own array', () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run('unordered'), [1, 3, 4, 6, 7, 9]);
  // the second demo must sort unordered2, not re-sort the already sorted array
  assert.deepEqual(run('unordered2'), [1, 3, 4, 6, 7, 9]);
  assert.deepEqual(logs, [[[1, 3, 4, 6, 7, 9]], [[1, 3, 4, 6, 7, 9]]]);
});

test('bubbleSort2 sorts arrays with negatives and duplicates', () => {
  const { run } = load(FILE);
  assert.deepEqual(run('var a = [3, -1, 3, 0, -5]; do { bubbleSort2(a) } while (swapped); a'), [-5, -1, 0, 3, 3]);
});
