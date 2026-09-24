'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "Edabit-problemSolving/indexMultiplier.js";

test("sums each element multiplied by its index", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("indexMultiplier([1, 2, 3, 4, 5])"), 40);
  assert.deepEqual(run("indexMultiplier([-3, 0, 8, -6])"), -2);
});

test("returns 0 for an empty array", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("indexMultiplier([])"), 0);
});
