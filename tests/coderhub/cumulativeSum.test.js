'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/cumulativeSum.js";

test("returns running totals", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("cumulativeSum([1, 2, 3])"), [1, 3, 6]);
  assert.deepEqual(run("cumulativeSum([])"), []);
  assert.deepEqual(run("cumulativeSum([-1, 1, -1])"), [-1, 0, -1]);
});

test("does not mutate the input array", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("var input = [1, 2, 3]; cumulativeSum(input); input"), [1, 2, 3]);
});
