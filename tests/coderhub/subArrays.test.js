'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/subArrays.js";

test("subtracts arr1 from arr2 element by element", () => {
  const { run } = load(FILE);
  assert.deepEqual(run("subArrays([4, 2, 88], [2, 4, 88])"), [-2, 2, 0]);
  assert.deepEqual(run("subArrays([], [])"), []);
});

test("returns null when the lengths differ", () => {
  const { run } = load(FILE);
  assert.equal(run("subArrays([1, 2], [1])"), null);
});
