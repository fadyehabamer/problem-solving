'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/mergeSort.js";

test("merges two sorted arrays", () => {
  const { run } = load(FILE);
  assert.deepEqual(run("mergeSort([1, 3, 5, 7, 9], [2, 4, 6, 8, 10])"), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  assert.deepEqual(run("mergeSort([], [1, 2])"), [1, 2]);
  assert.deepEqual(run("mergeSort([1, 1], [])"), [1, 1]);
  assert.deepEqual(run("mergeSort(['a', 'c'], ['b', 'd'])"), ["a", "b", "c", "d"]);
});

test("merges without falling back to Array.prototype.sort", () => {
  const { run } = load(FILE);
  run("Array.prototype.sort = function () { throw new Error('sort called'); }");
  assert.deepEqual(run("mergeSort([1, 4], [2, 3])"), [1, 2, 3, 4]);
});

test("does not mutate the inputs", () => {
  const { run } = load(FILE);
  assert.deepEqual(run("var a = [1, 5]; var b = [2]; mergeSort(a, b); [a, b]"), [[1, 5], [2]]);
});
