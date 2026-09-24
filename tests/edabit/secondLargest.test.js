'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "Edabit-problemSolving/secondLargest.js";

test("returns the second largest number", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("secondLargest([10, 40, 30, 20, 50])"), 40);
  assert.deepEqual(run("secondLargest([25, 143, 89, 13, 105])"), 105);
  assert.deepEqual(run("secondLargest([54, 23, 11, 17, 10])"), 23);
});

test("does not mutate the input array", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("var input = [3, 1, 2]; secondLargest(input); input"), [3, 1, 2]);
});
