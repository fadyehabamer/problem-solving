'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "Edabit-problemSolving/warOfNumbers.js";

test("returns the difference between even and odd sums", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("warOfNumbers([2, 8, 7, 5])"), 2);
  assert.deepEqual(run("warOfNumbers([12, 90, 75])"), 27);
  assert.deepEqual(run("warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243])"), 168);
});

test("counts negative odd numbers", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("warOfNumbers([-3, 2])"), 5);
});
