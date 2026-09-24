'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('../helpers/load');

const FILE = "LeetCode-Problems/topKFrequent.js";

test("returns the k most frequent elements", () => {
  const { run } = load(FILE);
  assert.deepEqual(run("topKFrequent([1, 1, 1, 2, 2, 3], 2)"), [1, 2]);
  assert.deepEqual(run("topKFrequent([1], 1)"), [1]);
  assert.deepEqual(run("topKFrequent([4, 4, 5, 5, 5, 6], 1)"), [5]);
  assert.deepEqual(run("topKFrequent([7, 8, 7, 9, 8, 7], 3).sort()"), [7, 8, 9]);
});

test("runs in linear time without sorting", () => {
  const { run } = load(FILE);
  run("Array.prototype.sort = function () { throw new Error('sort called'); }");
  assert.deepEqual(run("topKFrequent([3, 3, 3, 2, 2, 1], 2)"), [3, 2]);
});
