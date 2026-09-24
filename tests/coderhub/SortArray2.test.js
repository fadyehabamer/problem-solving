'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/SortArray2.js";

test("returns the numbers sorted ascending", () => {
  const { run } = load(FILE);
  assert.deepEqual(run("sortArray([10, 2, 33, 1])"), [1, 2, 10, 33]);
  assert.deepEqual(run("sortArray([])"), []);
});

test("does not mutate the input array", () => {
  const { run } = load(FILE);
  assert.deepEqual(run("var input = [3, 1, 2]; sortArray(input); input"), [3, 1, 2]);
});
